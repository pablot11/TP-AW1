const app = document.getElementById("contenedor-peliculas");
fetch('../../json/peliculas.json').then((dato)=>{
    return dato.json()
}).then((dato)=>{
    let peliculas = dato.peliculas.pelicula
    app.innerHTML= renderizarHtml(peliculas);
})

function renderizarHtml(peliculas){
    let html = "";
    peliculas.forEach(pelicula => {
        html = html + `<figure class="main-movies__figure">
                            <img src="assets/img/${pelicula.imagen}" alt="img-pelicula">
                            <figcaption> ${pelicula.nombre} (${pelicula.año})</figcaption>
                        </figure>`

    });
    return html;
}

