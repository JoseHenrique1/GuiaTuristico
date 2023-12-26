import { handleLoad, handleCreateSubmit } from "./locais.js";

window.addEventListener('load', ()=>{
    let page = document.querySelector('#ListViewLocais');
    if (page!==null) {
        handleLoad();
    }
})

let createLocalForm = document.querySelector("#createLocalForm");
createLocalForm && createLocalForm.addEventListener('submit', handleCreateSubmit);
