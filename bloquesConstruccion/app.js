const select = document.querySelector('select');
const p = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
    const choice = select.value;

    if(choice === 'sunny'){
        p.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }

}