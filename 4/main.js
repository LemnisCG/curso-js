const select = document.querySelector('select');
const html = document.querySelector('html');

select.onchange = function(){
    let choice = select.value;
    switch(choice){
        case 'blanco':
            update('white','black');
        break;
        case 'negro':
            update('black','white');
        break;
        case 'morado':
            update('purple','white');
        break;
        case 'amarillo':
            update('yellow','black');
        break;
        case 'psychedelic':
            update('lime','purple');
        break;
    }
}

function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;

}