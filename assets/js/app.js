// Renderizado HTML catalogo
const app = document.getElementById("contenedor-peliculas");
fetch('json/peliculas.json').then((dato)=>{
    return dato.json()
}).then((dato)=>{
    let peliculas = dato.peliculas.pelicula
    app.innerHTML= renderizarHtmlpeliculas(peliculas);
})
// Funcion para renderizar HTML catalogo
function renderizarHtmlpeliculas(peliculas){
    let html = "";
    peliculas.forEach(pelicula => {
        html = html + `<figure class="main-movies__figure">
                            <img src="assets/img/${pelicula.imagen}" alt="img-pelicula">
                            <figcaption> ${pelicula.nombre} (${pelicula.año})</figcaption>
                        </figure>`

    });
    return html;
}

//Renderizado HTML estrenos
const app2 = document.getElementById("container-movies-premiere");
fetch('json/estrenos.json').then((dato)=>{
    {return dato.json()}
}).then((dato)=>{
    let estrenos = dato.estrenos.estreno
    app2.innerHTML = renderizarHtmlestrenos(estrenos);
})
// Funcion para renderizar HTML estrenos
function renderizarHtmlestrenos(estrenos){
    let html = "";
    estrenos.forEach((estreno)=>{
        html = html + ` <div class="main__movie-premiere">
                            <h3 class="main__movie-premiere-title">${estreno.nombre}<span class="main__movie-premire-date">${estreno.fecha}</span></h3>
                            <figure class="main__movie-premiere-figure">
                                 <img src="assets/img/${estreno.imagen}.jpg" alt="peli">
                                 <figcaption>${estreno.sinopsis}</figcaption>
                             </figure>
                        </div>`
    })
    return html;
}

// TabPage
const boton = document.querySelectorAll(".main__tablinks");
const catalogo = document.querySelectorAll(".main__tabcontent");
for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", function(){
        for (let j = 0; j < boton.length; j++) {
            boton[j].classList.remove("active");
            catalogo[j].style.display = "none";
        }
        boton[i].classList.add("active");
        catalogo[i].style.display = "block";
    })
}
document.getElementById("defaultOpen").click();