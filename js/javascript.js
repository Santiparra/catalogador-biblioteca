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


function Libro(titulo, autor, paginas, estado, ) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.estado = estado
    this.informacion = function () {
        return titulo + autor + paginas + estado;
    }
}

function agregarLibro() {
    let tituloNuevoLibro = document.getElementById("nombreLibro").value;
    let autorNuevoLibro = document.getElementById("autorLibro").value;
    let paginasNuevoLibro = document.getElementById("paginasLibro").value;
    let estadoNuevoLibro = document.getElementById("estadoLibro").value;
    
    let nuevoLibro = Object.create(Libro);

    nuevoLibro.titulo = tituloNuevoLibro;
    nuevoLibro.autor = autorNuevoLibro;
    nuevoLibro.paginas = paginasNuevoLibro;
    nuevoLibro.estado = estadoNuevoLibro; 
    
    miBiblioteca.push(nuevoLibro);
}

function buscarLibro() {
    const libros = document.querySelector(".books");
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
buscarLibro();




/* miBiblioteca.pop(); */



/* Append Elements
parentNode.appendChild(childNode) appends childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode
Remove Elements
parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child */

/* div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div */

/* funcion que toma user input y lo manda al array

const theHobbit = new Book("The Hobbit", "by J.R.R. Tolkien,","295 pages,","not read yet")

console.log(theHobbit.info()); */