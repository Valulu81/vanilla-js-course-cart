import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { getCourses } from './list_courses';
import { addCourse,deteleCursos } from './data/cart.js';


//estar atento cuando se cargue la pagina
//addEventListener'DOMContentLoaded': estar atento cuando se cargue la pagina
document.addEventListener('DOMContentLoaded',() => {
    //mostrar la lista de cursos
    getCourses();

    //agregar el evento de escucha para agregar un curso al carrito
    document.querySelector('#list-courses').addEventListener('click', addCourse)

    //agregar evento para eliminar curso
    document.querySelector('#list-cart').addEventListener('click', deteleCursos)
}) 
//
