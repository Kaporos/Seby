import { render } from 'preact'
import { App } from './app'
import './index.css'

let container = document.createElement("div");
container.id = "seby"
document.body.appendChild(container)

render(<App/>, container)