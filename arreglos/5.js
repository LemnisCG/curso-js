// Volvamos al ejemplo que describimos anteriormente — s precios en una factimprima los nombres de los productos y loura, luego, sume los precios e imprímelos en la parte inferior. En el ejemplo editable a continuación, hay comentarios que contienen números — cada uno de estos marca un lugar donde debe agregar algo al código. Ellos son los siguientes:
const productos = [
    {
        nombre: 'Underpants',
        precio: '6.99'
    },
    {
        nombre: 'Socks',
        precio: '5.99'
    },
    {
        nombre: 'T-shirt',
        precio: '14.99'
    },
    {
        nombre: 'Trousers',
        precio: '31.99'
    },
    {
        nombre: 'Shoes',
        precio: '23.99'
    },
]
let suma = 0;
console.log('Producto\t\tPrecio')
console.log('-------------------------------------')
for(let i = 0; i < productos.length; i++){
    if(productos[i].nombre.length > 7){
        console.log( `${productos[i].nombre}\t\t${productos[i].precio}`);
    } else{ 
        console.log( `${productos[i].nombre}\t\t\t${productos[i].precio}`);
    }
    suma += Number(productos[i].precio)
}
console.log('-------------------------------------')
console.log('\ttotal' + ': ' + Math.round(suma * 100) / 100 );