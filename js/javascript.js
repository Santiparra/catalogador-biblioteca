let miBiblioteca = [ {
    titulo: "hobit",
    autor: "tokieb",
    paginas: 300,
    estado: "leido",
} , {
    titulo: "coco",
    autor: "echaue",
    paginas: 200,
    estado: "no leido",
}
];

let libroNuevo;

function Libro (titulo, autor, paginas, estado) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.estado = estado  
}

function sacarDatos(e) {
    e.preventDefault();
    let tituloNuevoLibro = document.getElementById("nombreLibro").value;
    let autorNuevoLibro = document.getElementById("autorLibro").value;
    let paginasNuevoLibro = document.getElementById("paginasLibro").value;
    let estadoNuevoLibro = document.getElementById("estadoLibro").value;
    libroNuevo = new Libro(tituloNuevoLibro, autorNuevoLibro, paginasNuevoLibro, estadoNuevoLibro);    
    miBiblioteca.push(libroNuevo);
    refrescarDOM();
    console.log(libroNuevo);
}

function refrescarDOM() {
    const libros = document.querySelector(".books");
    while (libros.hasChildNodes()) {
        libros.removeChild(libros.firstChild);
    }
    miBiblioteca.forEach(elemento => {
        let libroAAgregar = document.createElement("div");
        libroAAgregar.classList.add("cards");
        let tituloAAgregar = document.createElement("p");
        tituloAAgregar.classList.add("titulo");
        let autorAAgregar = document.createElement("p");
        autorAAgregar.classList.add("autor");
        let paginasAAgregar = document.createElement("p");
        paginasAAgregar.classList.add("paginas");
        let estadoAAgregar = document.createElement("p");
        estadoAAgregar.classList.add("estado");
        tituloAAgregar.textContent = elemento.titulo;
        autorAAgregar.textContent = elemento.autor;
        paginasAAgregar.textContent = elemento.paginas;
        estadoAAgregar.textContent = elemento.estado;
        libroAAgregar.appendChild(tituloAAgregar);
        libroAAgregar.appendChild(autorAAgregar);
        libroAAgregar.appendChild(paginasAAgregar);
        libroAAgregar.appendChild(estadoAAgregar);
        libros.appendChild(libroAAgregar);   
    }
)
}

let enviarFormulario = document.getElementById("agregar-libros");
enviarFormulario.addEventListener("submit", (e) => {
    sacarDatos(e);
}
)  

function valorCheckbox(element) {
    if(element.checked) 
        element.value="true"; 
    else
       element.value="false";
}

/* clase añadir form-to-add */
 /*    enviarFormulario.onsubmit = event.preventDefault();
   refrescarDOM(); */

