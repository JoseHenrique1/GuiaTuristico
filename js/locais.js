const url = 'http://localhost:3000/locais/';

async function getData() {
    const data = await fetch(url)
    .then(data=>data.json())
    .catch(e=>console.log(e));
    return data;
}

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
                <div class="card-buttons">
                    <i class="btn-card bg-primary tertiary bi bi-pencil-square"></i>
                    <i class="btn-card bg-primary tertiary bi bi-trash"></i>
                </div>
            </div>
        `
    )
}
export async function handleLoad () {
    let ContainerLocais = document.querySelector("#ContainerLocais");
    ContainerLocais.innerHTML = "";
    let data = await getData();
    renderCard(data);
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