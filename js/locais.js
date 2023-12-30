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
        ContainerLocais.append(createCard(local))
    });
}
function createCard(local) {
    const {id, titulo, descricao, foto} = local;
    let card = document.createElement('div');
    card.setAttribute('class', 'card-local');

    let img = document.createElement('img');
    img.setAttribute('src', foto);
    img.setAttribute('alt', titulo);

    card.append(img);

    let cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');

    let h3 = document.createElement('h3');
    h3.innerText = titulo;
    let p = document.createElement('p');
    p.innerText = descricao;

    cardContent.append(h3,p);

    card.append(cardContent);

    let cardButtons = document.createElement('div');
    cardButtons.setAttribute('class', 'card-buttons');

    let btnEdit = document.createElement('i');
    btnEdit.setAttribute('class', 'btn-card bg-primary tertiary bi bi-pencil-square');

    let btnDelete = document.createElement('i');
    btnDelete.setAttribute('class', 'btn-card bg-primary tertiary bi bi-trash');
    btnDelete.addEventListener('click', ()=>{deleteLocais(id, card)})

    cardButtons.append(btnEdit, btnDelete);

    card.append(cardButtons);
    return card;
}
export async function handleLoad () {
    let data = await getData();
    renderCard(data);
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


//DELETE LOCAIS

async function deleteLocais(id, card) {
    console.log('delete')
    await fetch(url+ String(id), {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json' // O tipo de conteúdo que estamos enviando
        },
    });
    card.remove()
}