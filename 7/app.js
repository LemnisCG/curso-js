const output = document.querySelector('.output');
let i = 10;

while(i >= 0) {
    const para = document.createElement('P');
    if(i === 10)
    {
        para.textContent = `Cuenta regresiva \n ${i}`;
    } else if (i === 0) {
        para.textContent = 'Blast off!';
    } else {
        para.textContent = i;
    }
    output.appendChild(para);

    i--;
}