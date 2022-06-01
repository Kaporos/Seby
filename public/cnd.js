const PREFIX = "v2.0"
const CACHE_NAME = "vivalavida"

this.addEventListener("install", () => {
    this.skipWaiting().then(r => {});
    console.log(`${PREFIX} Installed`)
})

this.addEventListener("activate", () => {
    console.log(`${PREFIX} Active`)
    caches.delete(CACHE_NAME).then((a) => {
        console.log("Cache reset !")
    })
})


this.addEventListener('fetch', function(event) {
    let url = event.request.url;
    if (url.includes("get")) {
        event.respondWith(caches.open(CACHE_NAME).then((cache) => {
           return cache.match(url).then((a) => {
               return a != undefined ? a : new Response(JSON.stringify(""))
           })
        }))
    }
    if (url.includes("set")) {
        let clone = event.request.clone()
        event.respondWith(clone.json().then(data => {
            return caches.open(CACHE_NAME).then(c => {
                return c.put(url.replace("set", "get"), new Response(JSON.stringify(
                    data
                ))).then(() => {
                    return new Response("Done !")
                })
            })
        }).catch(e => e))

    }
});
