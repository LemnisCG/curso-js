const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admitir: ';
refused.textContent = 'Rechazar: ';

for (const peo of people){
    console.log(peo)
    if(peo !== 'Phil' && peo !== 'Lola'){
        admitted.textContent += ` ${peo}`;
    } else {
        refused.textContent += ` ${peo}`
    }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length) + '.';