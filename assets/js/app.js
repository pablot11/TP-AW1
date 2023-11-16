const app = document.getElementById("contenedor-peliculas");
let html = "";
fetch('/json/peliculas.json').then((dato)=>{
    return dato.json()
}).then((dato)=>{
    let peliculas = dato.peliculas.pelicula
    renderizarHtml(peliculas)
    app.innerHTML=html;
})

function renderizarHtml(peliculas){
    peliculas.forEach(pelicula => {
        html = html + `<figure class="main-movies__figure">
                            <img src="assets/img/${pelicula.imagen}" alt="img-pelicula">
                            <figcaption> ${pelicula.nombre} (${pelicula.año})</figcaption>
                        </figure>`

    });

}

