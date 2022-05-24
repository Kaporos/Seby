import { render } from 'preact'
import { App } from './app'
import './index.css'

fetch("https://raw.githubusercontent.com/Kaporos/Seby/main/dist/index.css").then(r => r.text()).then((style) => {
    let elem = document.createElement("style")
    elem.innerText = style+="\n"
    document.body.appendChild(elem)
    let container = document.createElement("div");
    container.id = "seby"
    document.body.appendChild(container)

    render(<App/>, container)
})


