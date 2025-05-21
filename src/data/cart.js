

export function addCourse(e){
    // sacame el abuelo de la etiqueta (target)
    console.log(e.target.parentElement.parentElement);

    //el metodo closest te deuelve el contenedor mas cercano que tenga
    // punto (.)= es para referenciar clase
    //hastag (#) = es para refrenciar los ID
    const button = e.target.closest('.card');
    console.log(button)
}

