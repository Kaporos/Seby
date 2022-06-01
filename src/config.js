export function base() {
    return document.location.href.includes("127.0.0.1") ? "http://127.0.0.1:3000/dist" : "https://seby.surge.sh/dist"
}


