import { handleLoad } from "./locais.js";

window.addEventListener('load', ()=>{
    let page = document.querySelector('#ListViewLocais');
    if (page!==null) {
        handleLoad();
    }
})

