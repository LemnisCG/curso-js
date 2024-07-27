const input = document.querySelector('input')
const btn = document.querySelector('button');
const para = document.querySelector('p');
const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];

btn.addEventListener('click', () => {
    const searchName = input.value.toLocaleLowerCase();
    input.value = '';
    para.textContent  = '';
    for (const contact of contacts){
        const splitContact = contact.split(':');
        if(splitContact[0].toLocaleLowerCase() === searchName){
            para.textContent = `El numero de ${splitContact[0]} es ${splitContact[1]}`;
            break
        }
    }
    if(para.textContent === ''){
        para.textContent = 'Contacto no encontrado';
    }    
})
