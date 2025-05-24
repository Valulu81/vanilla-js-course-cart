import Swal from "sweetalert2"

//let array_cart = [] //arreglo de objetos (cursos)
/**
 * json.parse
 * json.strinfy
 */
export let array_cart = JSON.parse(localStorage.getItem('cart-fsj28')) || []
//accediendo al tbody de la tabla
let tbody = document.querySelector('tbody')

/** e => evento */
export function addCourse(e){
    //sacame el abuelo de la etiqueta (target)
    //console.log(e.target.parentElement.parentElement)
    
    //el metodo closest te devuelve el contenedor mas cercano que tenga
    //si la persona selecciona algo que sea diferente al boton, que se salga de la operacion
    const button = e.target.closest('.button-cart')
    if(!button) return

    //si la persona selecciono un boton debe de mostrar la tarjeta del curso
    const card = button.closest('.card')
    console.log(card)

    //agregando la clase a disabled al boton 
    button.classList.add('disabled')
    button.textContent = 'Ir al carrito'

    Swal.fire({
        title: "Agregado al carrito!",
        icon: "success",
        draggable: true
    });

    getCourseData(card)
}

//funcion para convertir la tarjeta en un objeto y agregarlo en un arreglo
function getCourseData(course){
    console.log(course)

    //accediendo a los valores del curso (card del html)
    const object_course = {
        title: course.querySelector('h5').textContent,
        image: course.querySelector('img').src,
        price: course.querySelector('.price').textContent,
        id: course.querySelector('button').getAttribute('data-id')
    }

    console.log(object_course)
    //agregando el curso al arreglo
    array_cart.push(object_course)
    //actualizar el localstorage
    localStorage.setItem('cart-fsj28', JSON.stringify(array_cart))
    console.table(array_cart)

    cartHTML()
}

//dibujar la tabla con los cursos del carrito
export function cartHTML(){

    tbody.innerHTML = ""

    array_cart.map(course => {
        //creando la etiqueta <tr>
        console.log(course.image)
        const fila = document.createElement('tr')
        fila.innerHTML = `
            <td>
                <img src="${course.image}" width="100" />
            </td>
            <td>${course.title}</td>
            <td>$${course.price}</td>
            <td>
                <button class="btn btn-danger delete_course" data-id=${course.id}>X</button>
            </td>
        `;
        //agregando la fila en el tbody
        tbody.appendChild(fila)
    })
}


export function deteleCursos(e){ //e devuelve info de lo que la persona hizo
    console.log(e.target)

    const courseId = e.target.getAttribute('data-id')
    console.log(courseId)

    Swal.fire({
        title: "Estas seguro de eliminar el curso?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            //eliminar curso
            array_cart = array_cart.filter(course => course.id !== courseId)
            console.log(array_cart)
            localStorage.setItem('cart-fsj28', JSON.stringify(array_cart))
            
            Swal.fire({
                title: "Deleted!",
                text: "Curso eliminado correctamente",
                icon: "success"
            });

            cartHTML()
        }
        });
}