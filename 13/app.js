const para = document.querySelector('p');
const btn = document.querySelector('button');

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

btn.addEventListener('click', random =>{
    random = chooseName(names)
    para.textContent = random
});

function chooseName(name){
    random(name)
}
function random(max){
    return max[Math.floor(Math.random() * max.length)]
}



// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
  
// console.log(getRandomArbitrary(5,3))
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   console.log(getRandomInt(5,3))

//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   console.log(getRandomIntInclusive(10,3))