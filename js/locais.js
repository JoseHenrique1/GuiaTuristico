const url = 'http://localhost:3000/locais/';

//VIEW LOCAIS

function renderCard(locais) {
    let ContainerLocais = document.querySelector("#ContainerLocais");
    locais.forEach(local => {
        ContainerLocais.innerHTML += createCard(local)
    });
}
function createCard(local) {
    const {titulo, descricao, foto} = local;
    return (
        `
            <div class="card-local">
                <img src="${foto}" alt="${titulo}">
                <div class="card-content" >
                    <h3>${titulo}</h3>
                    <p>${descricao}</p>
                </div>
            </div>
        `
    )
}
export async function handleLoad () {
    let ContainerLocais = document.querySelector("#ContainerLocais");
    ContainerLocais.innerHTML = "";
    fetch(url)
    .then(data=>data.json())
    .then(data=>renderCard(data))
    .catch(e=>console.log(e))
    //criar os cards e add na section list
}


//CREATE LOCAIS

export function handleCreateSubmit(e) {
    e.preventDefault();
    let local = {
        titulo: e.target.titulo.value,
        descricao: e.target.descricao.value,
        foto: e.target.imagem.value
    };
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' // O tipo de conteúdo que estamos enviando
        },
        body: JSON.stringify(local)
    })
}