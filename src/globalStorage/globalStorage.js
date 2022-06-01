export class GlobalStorage {
    storage;
    iframe;
    constructor(storage) {
        this.storage = storage;
        this.#setupIframe()
    }


    #setupIframe() {
        let i = document.createElement("iframe");
        i.src = this.storage
        i.id = "globalStorage"
        i.style.cssText = "display:none;"
        document.body.appendChild(i)
        this.iframe = i;
    }

    #sendMessage(data) {
        this.iframe.contentWindow.postMessage({gs: data},"*")
    }


    #waitMessage() {
        return new Promise((resolve, reject) => {
            let callback = e => {
                if (Object.keys(event.data).includes("gs")) {
                    let data = event.data.gs;
                    if (Object.keys(data).includes("value")) {
                        window.removeEventListener("message", callback)
                        resolve(data.value)
                    } else {
                        reject("No value provided")
                    }
                }
            }

            window.addEventListener("message", callback, false);
        })

    }

    async get(key) {
        this.#sendMessage({"key":key})
        return await this.#waitMessage()
   }

    async set(key, data) {
        this.#sendMessage({"key": key, "value": data})
    }
}