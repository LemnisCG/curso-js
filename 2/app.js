// Quiero que creas un juego sencillo del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento, debería decirle al jugador si ha acertado o no; y si está equivocado, debería decirle si se ha quedado corto o se ha sucedido. También debería decir los números que ya se probaron anteriormente. El juego terminará una vez que el jugador acierte o cuando se acaben los intentos. Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Intentos anteriores: ";
    }
    guesses.textContent += userGuess + " ";
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "¡¡¡Fin del juego!!!";
      setGameOver();
    } else {
      lastResult.textContent = "¡Incorrecto!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "¡El número es muy bajo!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "¡El número es muy grande!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
  
guessSubmit.addEventListener('click', checkGuess);

// function setGameOver(){
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Iniciar nuevo juego';
//     document.body.append(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }

// function resetGame(){
//     guessCount = 1;

//     const resetParas = document.querySelectorAll('.resultParas p');
//     for(let i = 0; i < resetParas.length; i++){
//         resetParas[i].textContent = "";
//     }

//     resetButton.parentNode.removeChild(resetButton);

//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = "";
//     guessField.focus();

//     lastResult.style.backgroundColor = 'white';

//     randoNumber = Math.floor(Math(random() * 100) + 1)
// }