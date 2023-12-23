const url = 'http://localhost:3000/locais';

export async function handleLoad () {
    fetch(url)
    .then(data=>data.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e))
    //criar os cards e add na section list
}