const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

myArray.forEach(element => {
    const li = document.createElement('LI');
    li.style.listStyle = 'none'
    li.textContent = element;
    

    list.appendChild(li);
})

const section = document.querySelector('section');
section.appendChild(list);