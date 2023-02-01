let miBiblioteca = [ 
];
let libroNuevo;

function Libro (titulo, autor, paginas, estado) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.estado = estado
}

let formulario = document.querySelector("form")
let mostrarFormulario = document.querySelector(".agregarLibro");
mostrarFormulario.addEventListener("click", () => {
    formulario.classList.remove("hidden");
    formulario.classList.add("mostrar");
    ;
})  

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
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("botonBorrado");
        botonBorrar.setAttribute("id", miBiblioteca.indexOf(elemento))
        let marcarLeido = document.createElement("button");
        marcarLeido.classList.add("botonLeido");
        tituloAAgregar.textContent = elemento.titulo;
        autorAAgregar.textContent = elemento.autor;
        paginasAAgregar.textContent = elemento.paginas;
        estadoAAgregar.textContent = elemento.estado;
        botonBorrar.textContent = "Borrar";
        marcarLeido.textContent = "Leído"
        if (elemento.estado === "true") {
            estadoAAgregar.textContent = "Leído"
        } else { estadoAAgregar.textContent = "Sin leer"    
        }

        libroAAgregar.appendChild(tituloAAgregar);
        libroAAgregar.appendChild(autorAAgregar);
        libroAAgregar.appendChild(paginasAAgregar);
        libroAAgregar.appendChild(estadoAAgregar);
        libroAAgregar.appendChild(botonBorrar);
        libroAAgregar.appendChild(marcarLeido);
        libros.appendChild(libroAAgregar);   

         botonBorrar.addEventListener("click", () => {
            miBiblioteca.splice(miBiblioteca.indexOf(elemento), 1 );
            refrescarDOM()
        })       
        marcarLeido.addEventListener("click", () => {
            if (elemento.estado === "true") {
                elemento.estado = "false"
            } else {elemento.estado = "true"}
            refrescarDOM()
        })
    }
)}

let enviarFormulario = document.getElementById("agregar-libros");
enviarFormulario.addEventListener("submit", (e) => {
    formulario.classList.remove("mostrar");
    formulario.classList.add("hidden");
    sacarDatos(e);
})  

function valorCheckbox(element) {
    if(element.checked) 
        element.value="true"; 
    else
       element.value="false";
}



/* clase añadir form-to-add */
 