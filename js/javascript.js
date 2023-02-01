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
    let estadoNuevoLibro = document.getElementById("estadoLibro").value;
    libroNuevo = new Libro(tituloNuevoLibro, autorNuevoLibro, notasNuevoLibro, estadoNuevoLibro);    
    miBiblioteca.push(libroNuevo);
    refrescarDOM();
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
        let notasAAgregar = document.createElement("p");
        notasAAgregar.classList.add("notas");
        let estadoAAgregar = document.createElement("p");
        estadoAAgregar.classList.add("estado");
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("botonBorrado");
        botonBorrar.setAttribute("id", miBiblioteca.indexOf(elemento))
        let marcarLeido = document.createElement("button");
        marcarLeido.classList.add("botonLeido");
        tituloAAgregar.textContent = elemento.titulo;
        autorAAgregar.textContent = elemento.autor;
        notasAAgregar.textContent = elemento.notas;
        estadoAAgregar.textContent = elemento.estado;
        botonBorrar.textContent = "Borrar";
        marcarLeido.textContent = "Leído"
        if (elemento.estado === "true") {
            estadoAAgregar.textContent = "Leído"
        } else { estadoAAgregar.textContent = "Sin leer"    
        }
        libroAAgregar.appendChild(tituloAAgregar);
        libroAAgregar.appendChild(autorAAgregar);
        libroAAgregar.appendChild(notasAAgregar);
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
    e.target.reset()
})  

function valorCheckbox(element) {
    if(element.checked) 
        element.value="true"; 
    else
       element.value="false";
} 