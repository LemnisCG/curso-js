// En este ejercicio tenemos los nombres de las ciudades del Reino Unido, Pero las mayúsculas estan completamente desordenadas. Queremos que los cambies para que estén en minúscula, a excepción de la primera letra. Una buena manera de hacerlo es:
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
let result = '';
for(let i = 0; i < cities.length; i++){
    const input = cities[i].toLocaleLowerCase();
    const firstLetter = input[0].toLocaleUpperCase();
            
    result = input.replace(input[0], firstLetter);
    console.log(result);
}