const result = document.querySelector('#results');
const calculateBtn = document.querySelector('#calculate');
const borrar = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
borrar.addEventListener('click', () => (result.textContent = ''));


function calculate(){
    let random = Math.random(100) * 100;

    for (let i = 0; i < random; i++){
        let newResult = `${i} x ${i} = ${i * i}`;
        result.textContent += `${newResult}\n`;
    };
    
    result.textContent +='\nFinalizado';
}

