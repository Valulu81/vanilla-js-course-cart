import courses from './data/courses.json'

export function getCourses(){
    console.log(courses)
    const courseList = document.querySelector('.container-courses');

    //arreglo
    courses.map(course => {
        //etiqueta html
        const article = document.createElement('article');
        /** agregar clases, eliminar, verificar */
        article.classList.add('col-md-4');

        //desestructuracion de datos
        const { title, image, description, price, id } = course

        article.innerHTML = `
            <div class="card">
                <img src=${image} class="card-img-top" alt="clase 1">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}}</p>
                    <p class="price fw-bold">${price}</p>
                    <button class="btn btn-primary w-100 button-cart" data-id=${id}><i class="bi bi-bag-plus-fill"></i> Agregar al carrito</button>
                </div>
            </div>
        `
        courseList.appendChild(article);
    })
}