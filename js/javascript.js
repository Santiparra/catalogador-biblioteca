let miBiblioteca = [];


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
    
const nuevoLibro = Object.create(Libro);

    nuevoLibro.titulo = tituloNuevoLibro;
    nuevoLibro.autor = autorNuevoLibro;
    nuevoLibro.paginas = paginasNuevoLibro;
    nuevoLibro.estado = estadoNuevoLibro; 
    
    miBiblioteca.push(nuevoLibro);
}

function buscarLibro() {
    
}

        <div class="books">
            <div class="cards">
                <p class="titulo"></p>
                <p class="autor"></p>
                <p class="paginas"></p>
                <p class="estado"></p>
            </div>
        </div>

const libros = document.querySelector(".books");

const libroAAgregar = document.createElement("div")
libroAAgregar.classList.add("cards")


libros.appendChild(libroAAgregar)



const tituloAAgregar = document.createElement("p")
tituloAAgregar.classList.add("titulo")
tituloAAgregar.textContent = ;

const autorAAgregar = document.createElement("p")
autorAAgregar.classList.add("autor")
autorAAgregar.textContent = ;

const paginasAAgregar = document.createElement("p")
paginasAAgregar.classList.add("paginas")
paginasAAgregar.textContent = ;

const estadoAAgregar = document.createElement("p")
estadoAAgregar.classList.add("estado")
estadoAAgregar.textContent = ;

libroAAgregar.appendChild(tituloAAgregar)
libroAAgregar.appendChild(autorAAgregar)
libroAAgregar.appendChild(paginasAAgregar)
libroAAgregar.appendChild(estadoAAgregar)


miBiblioteca.pop();



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