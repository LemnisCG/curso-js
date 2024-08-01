function displayMessage(){
    const body = document.body;

    const panel = document.createElement('DIV');
    panel.setAttribute('class', 'msgBox');
    body.appendChild(panel);

    const msg = document.createElement('P');
    msg.textContent = 'This is a message box';
    panel.appendChild(msg);

    const closeBtn = document.createElement('BUTTON');
    closeBtn.textContent = 'X';

    closeBtn.addEventListener('click', () =>{
        closeBtn.parentNode.removeChild(panel)
    })
}
displayMessage()