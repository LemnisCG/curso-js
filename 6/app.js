const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    para.textContent = 'Resultado: ';
    const num = input.value;
    input.value = '';
    input.focus();
    for (let i = 0; i <= num; i++){
        const sqRoot = Math.sqrt(i);
        if(Math.floor(sqRoot) !== sqRoot){
            continue;
        }
        para.textContent += `${i} ` ;
    }
})