const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];



cargarAddEventList();


function cargarAddEventList(){
    listaCursos.addEventListener('click',SelectCourse);
}

function SelectCourse(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function leerDatosCurso(curso){

    limpiarHTML()

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    articulosCarrito = [...articulosCarrito,infoCurso];
    console.log(articulosCarrito);

    carritoHTML();
}

function carritoHTML(){

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src = "${curso.imagen}" width = 100>
        </td> 

        <td> ${curso.titulo}</td>
        <td> ${curso.precio}</td>
        <td> ${curso.cantidad}</td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>        
        `;
    contenedorCarrito.appendChild(row);
    });
}


function limpiarHTML(){

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}