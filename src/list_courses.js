import courses from './data/courses.json'

export function getCourses(){
    console.log(courses)
    const courseList = document.querySelector('.container-courses');

    courses.map(course => {
        //etiqueta html
        const article = document.createElement('article');
        /** agregar clases, eliminar, verificar */
        article.classList.add('col-md-4');

        article.innerHTML = `
            <div class="card">
                <img src=${image} class="card-img-top" alt="clase 1">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}}</p>
                    <p class="price fw-bold">${course.price}</p>
                    <button class="btn btn-primary w-100 button-cart" data-id=${course.id}><i class="bi bi-bag-plus-fill"></i> Agregar al carrito</button>
                </div>
            </div>
        `
        courseList.appendChild(article);
    })
}