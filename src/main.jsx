import { render } from 'preact'
import { App } from './app'
import './index.css'
import {base} from "./config";
console.log("[SEBY] Loading CSS...")
if (document.getElementById("seby") != undefined) {
    console.log("[SEBY] Already Initialized !")
    document.getElementById("seby").style.display = document.getElementById("seby").style.display === "none" ? "block" : "none";
} else {
    fetch(base()+"/index.css").then(r => r.text()).then((style) => {
        let styleElem = document.createElement("style")
        styleElem.innerText = style+="\n"
        document.body.appendChild(styleElem)
        let container = document.createElement("div");
        container.id = "seby"
        document.body.appendChild(container)
        console.log("[SEBY] Loaded CSS !")
        console.log("[SEBY] Rendering app !")

        render(<App/>, container)
    })

}


