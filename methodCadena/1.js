// En el primer ejercicio, comenzamos de manera simple — tenemos una matriz de mensajes de tarjetas de felicitación, pero queremos ordenarlos para que aparezcan solo los mensajes de Navidad. Queremos que complete una prueba condicional dentro de la estructura if( ... ), para comprobar cada cadena y solo imprimirla en la lista si es un mensaje de Navidad.

const matriz = ['hola juan feliz navidad', 'hola mamahuevo', 'feliz navidad','asqueroso xd'];
let result = '';
for(let i = 0; i < matriz.length; i++){
    let input = matriz[i];
    if (matriz[i].indexOf('navidad') !== -1){
        result = input;
        console.log(result)
    };
    
};