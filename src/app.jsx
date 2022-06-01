import {base} from "./config";
import {Component, createRef} from "preact";
import {useCallback, useEffect} from "preact/compat";
import {GlobalStorage} from "./globalStorage/globalStorage";




export class App extends Component{
    btnRef = createRef()
    constructor() {
        super();
        this.state = {modules: [], open: false, search: "", top: false}
        this.loadModules()
    }
    async loadModules() {
        let r = await fetch(base()+"/modules/modules.json");
        let json = await r.json()
        let modules = json.modules
        modules = modules.filter(mod => {
            console.log(mod)
            if (mod.url == "*") {
                return true;
            }
            return document.location.href.includes(mod.url)
        })

        modules = modules.map(m => Object.assign({}, m, {open: false}))


        this.setState(s => Object.assign({}, s, {modules: modules}))
        await this.loadUserData()
    }

    hiddenIframe(url) {
        let i = document.createElement("iframe");
        i.src = url
        i.id = "seby_toto"
        i.style.cssText = "display:none;"
        document.body.appendChild(i)
    }

    async loadUserData() {
        const STORAGE = base()+"/cndsw.html"
        window.globalStorage = new GlobalStorage(STORAGE);

    }

    async saveUserData(data) {
        console.log("[SEBY] Saving data...")
        const STORAGE = base()+"/cndsw.html"
        this.hiddenIframe(STORAGE+"?data="+btoa(JSON.stringify(data)))
    }

    async executeModule(name) {
        console.log(name)
        let r = await fetch(base()+"/modules/"+name+"/index.js")
        let text = await r.text()
        this.toggle()
        eval(text)
    }
    toggle() {
        this.setState(s => Object.assign({}, s, {open: !s.open}))
    }

    onSearchInput = e => {
        const { value } = e.target;
        this.setState({search: value})
    }

    onMouseDown = e => {
        e.preventDefault()
        let mouseX = e.pageX
        let mouseY = e.pageY
        let target = e.target.parentNode
        let elemX = +target.style.left.split("px")[0]
        let elemY = +target.style.top.split("px")[0]
        let offsetX = mouseX - elemX
        let offsetY = mouseY - elemY
        let moved = false;
        function moveAt(mouseX, mouseY) {
            localStorage.setItem("seby_baseX", mouseX - offsetX+"")
            localStorage.setItem("seby_baseY", mouseY - offsetY+"")
            target.style.left = mouseX - offsetX + "px";
            target.style.top = mouseY - offsetY  + "px";
        }

        let onMouseMove = (event) => {
            moved = true
            let mouseX = event.pageX
            let mouseY = event.pageY
            let sizeY = e.target.parentNode.offsetHeight
            let top = false
            if (((mouseY - 50) / sizeY) > 0.5) {
                top = true;
            }
            this.setState(Object.assign({}, this.state, {top}))
            moveAt(mouseX, mouseY)
        }

        document.addEventListener('mousemove', onMouseMove);

        target.onmouseup = () => {
            if (!moved) {
                this.toggle()
            }
            document.removeEventListener('mousemove', onMouseMove);
            target.onmouseup = null;
        };


    }
    openCategory = (cat) => {
        this.setState(Object.assign({}, this.state, {modules: this.state.modules.map(x => x == cat ? {...x, open: !x.open} : x)}))
    }
    componentDidMount() {
        let baseX = +(localStorage.getItem("seby_baseX") || 0)
        let baseY = +(localStorage.getItem("seby_baseY") || 0)
        let top = false
        if (((baseY - 50) / this.btnRef.current.parentNode.offsetHeight) > 0.5) {
            top = true;
        }
        this.setState(Object.assign({}, this.state, {top}))
        this.btnRef.current.parentNode.style.left = baseX + "px"
        this.btnRef.current.parentNode.style.top = baseY + "px"
    }




    render(props, state, context) {
        return (
            <>
                <div className="seby_btn"  ref={this.btnRef} onLoad={this.positionLoad} onMouseDown={this.onMouseDown}>
                    Seby
                </div>
                <div className={"seby_menu " + (state.open ? "seby_show" : "") + " "+(state.top ? "top" : "")}>
                    <input onInput={this.onSearchInput} className="seby_menu_input" type="text" placeholder="Search"/>
                    <div className={"seby_content " + (state.open ? "seby_content_open" : "")}>
                        {state.modules.filter(mod => {
                            if (mod.name.toLowerCase().includes(state.search.toLowerCase())) {
                                return true;
                            }
                            return false;
                        }).map(mod => {
                            return  <>
                                <div className={"seby_mod " + (mod.type != "module" ? mod.open ? "seby_cat_open" : "" : "")} onClick={() => {
                                    mod.type == "module" ? this.executeModule(mod.dir) : this.openCategory(mod)

                                }}>
                                    <p>{mod.name}</p>
                                    <button className={mod.type == "module" ? "seby_run_btn" : "seby_expand_btn"}></button>

                                </div>

                                {(mod.type != "module" && mod.open) ?
                                    <div className="seby_submodules">

                                        {mod.submodules.map(submod =>
                                        <div className="seby_mod" onClick={() => {
                                            submod.type == "module" ? this.executeModule(mod.dir+"/"+submod.dir) : this.openCategory(submod)

                                        }}>
                                            <p>{submod.name}</p>
                                            <button className={submod.type == "module" ? "seby_run_btn" : "seby_expand_btn"}></button>

                                        </div>
                                    )}
                                    </div>

                                    : <></>}



                            </>
                        })}
                        <div className="seby_brand">
                            <p>The more you know, the more powerful you are.</p>
                        </div>
                    </div>

                </div>




            </>
        );
    }

}
