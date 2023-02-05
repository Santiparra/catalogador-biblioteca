let miBiblioteca = [];
let libroNuevo;

function Libro (titulo, autor, notas, estado) {
    this.titulo = titulo
    this.autor = autor
    this.notas = notas
    this.estado = estado
}

let formulario = document.querySelector("form")
let mostrarFormulario = document.querySelector(".agregarLibro");
mostrarFormulario.addEventListener("click", () => {
    formulario.classList.remove("hidden");
    formulario.classList.add("mostrar");
})  

let cancelarFormulario = document.querySelector(".cancelar");
cancelarFormulario.addEventListener("click", () => {
    formulario.classList.remove("mostrar");
    formulario.classList.add("hidden");
    formulario.reset();
})  

function sacarDatos(e) {
    e.preventDefault();
    let tituloNuevoLibro = document.getElementById("nombreLibro").value;
    let autorNuevoLibro = document.getElementById("autorLibro").value;
    let notasNuevoLibro = document.getElementById("abstract").value;
    let estadoNuevoLibro = radioBox();
    libroNuevo = new Libro(tituloNuevoLibro, autorNuevoLibro, notasNuevoLibro, estadoNuevoLibro);    
    miBiblioteca.push(libroNuevo);
    saveLocal();
    refrescarDOM();
}

function refrescarDOM() {
    getLocalStorage()
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

        let notasAAgregar = document.createElement("p");
        notasAAgregar.classList.add("notas");

        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("botonBorrado");
        botonBorrar.setAttribute("id", miBiblioteca.indexOf(elemento))
        
        let marcarLeido = document.createElement("button");
        marcarLeido.classList.add("botonLeido");

        tituloAAgregar.textContent = elemento.titulo;
        autorAAgregar.textContent = elemento.autor;
        notasAAgregar.textContent = elemento.notas;
        botonBorrar.textContent = "Borrar";

        if (elemento.estado === "true") {
            marcarLeido.textContent = "Leído";
            marcarLeido.classList.add("read");
            libroAAgregar.classList.add("cardReaded");
        } else { marcarLeido.textContent = "Sin leer";
            marcarLeido.classList.add("unread"); 
            libroAAgregar.classList.add("cardUnreaded");   
        }
        libroAAgregar.appendChild(tituloAAgregar);
        libroAAgregar.appendChild(autorAAgregar);
        libroAAgregar.appendChild(notasAAgregar);
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
    e.target.reset()
})  

const radioBox = () => {
    if(formulario.querySelector('input[name="leiste"]:checked').value == "true") return "true";
    else return "false";
}

function saveLocal() {
    localStorage.setItem("catalogo", JSON.stringify(miBiblioteca));
  }

function getLocalStorage() {
    if (localStorage.getItem("catalogo")) {
      miBiblioteca = JSON.parse(localStorage.getItem("catalogo"));
    } else {
      miBiblioteca = [];
    }
}
refrescarDOM()