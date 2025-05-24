import { array_cart, cartHTML} from './data/cart';
import courses from "./data/courses.json"

export function getCourses(){
    console.log(courses)
    const courseList = document.querySelector('.container-courses');

    //lista de cursos general
    courses.map(course => {
        //etiqueta html
        const article = document.createElement('article');
        /** agregar clases, eliminar, verificar */
        article.classList.add('col-md-4');

        //desestructuracion de datos
        const { title, image, description, price, id } = course
        //validando si el boton es disabled
        let agregado = false;
        //cursos selectivos (estan en el carrito)
        array_cart.forEach(course => {
            if(id == course.id){
                agregado = true;
                return
            }
        })

        article.innerHTML = `
            <div class="card">
                <img src=${image} class="card-img-top" alt="clase 1">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}}</p>
                    <p class="price fw-bold">${price}</p>
                    <button class="btn btn-primary w-100 button-cart ${(agregado) ? ' disabled' : ''}" data-id=${id}><i class="bi bi-bag-plus-fill"></i> ${(agregado) ? 'Ir al carrito' : 'Agregar al carrito'}</button>
                </div>
            </div>
        `
        courseList.appendChild(article);

    })


    //cargando la lista del carrito
    cartHTML()

    //validando que los botones esten desabilitados conforme al localstorage
    // array_cart.forEach(course => {
    //     //llamar botones
    //     const button = document.querySelector(`.button-cart[data-id=${course.id}]`);
    //     //condicionando si el id es igual al del boton del curso
    //     if(button){
    //         button.classList.add('disabled')
    //         button.textContent = "Ir al carrito"
    //     }
    // })
}