let para = document.createElement('p');

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        } 
    }
    return true;
}

for(let i = 500; i >= 2; i--){
    if (isPrime(i)){
        if (para.textContent.length > 0) {
            para.textContent += ', ';
        }
        para.textContent += i;
    }
}
let section = document.querySelector('section');
section.appendChild(para);