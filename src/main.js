import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { getCourses } from './list_courses';

//estar atento cuando se cargue la pagina
document.addEventListener('DOMContentLoaded',() => {
    //mostrar la lista de cursos
    getCourses();
}) 
