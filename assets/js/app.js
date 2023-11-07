import peliculas from "./peliculas.js"
/*
const app = document.getElementById('main');
let renderizadoHtml = "";
peliculas.peliculas.forEach(pelicula => {
    renderizadoHtml = renderizadoHtml + `<figure class="main-movies__figure">
                                                <img src="assets/img/${pelicula.imagen}" alt="img-pelicula">
                                                <figcaption>${pelicula.nombre}</figcaption>
                                          </figure>`
});
app.innerHTML = `
    <h1 class="main__h1">Nuestro Catalogo de Peliculas</h1>
    <div class="main__search">
        <input class="main__input-search" type="search" placeholder="Búsqueda" name="search">
        <button class="main__input-button" type="submit">Buscar</button>
    </div>
    <div class="main-movies container">
        ${renderizadoHtml}
    </div>


`
*/

fetch('/json/peliculas.json').then((dato)=>{
    return dato
}).then((dato)=>{
    console.log(dato);
})




