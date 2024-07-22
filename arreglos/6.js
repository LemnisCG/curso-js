// Un buen uso para los métodos de arreglo como push()y pop()es cuando estás manteniendo un registro de elementos actualmente activos en una aplicación web. En una escena animada por ejemplo, es posible que tengas un arreglo de objetos que representen los gráficos de fondo que se muestran actualmente, y es posible que sólo desees que se muestren 50 a la vez, por razones de rendimiento o desorden. A medida que se crean y agregan nuevos objetos al arreglo, se pueden eliminar los más antiguos del arreglo para mantener el número deseado.

// En este ejemplo vamos a mostrar un uso mucho más simple: aquí te daremos un sitio de búsqueda falsa, con un cuadro de búsqueda. La idea es que cuando los términos se ingresen en un cuadro de búsqueda, se muetren el top 5 de términos de búsqueda anteriores en la lista. Cuando el número de términos supera el 5, el último término comienza a borrarse cada vez que agrega un nuevo término a la parte superior, por lo que siempre se muestran los 5 términos anteriores.

const array = [];
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');
const ul = document.querySelector('.output ul');

searchBtn.addEventListener('click', () =>{
    if(array.length >= 5){
        array.shift();
    }
    array.push(searchInput.value);
    console.log(array)
})


