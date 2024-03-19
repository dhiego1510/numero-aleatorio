
let numRandom = 0;
let tries = 0;
let listNumbers = [];
let maxRandom = 10;

function useText(element, text) {
  let title = document.querySelector(element);
  title.innerHTML = text; 

}

function numberRandom() {
  let numGenerate = Math.floor(Math.random() * maxRandom) + 1;

  if (listNumbers.length == maxRandom) {
    useText('p', 'No hay mas intentos, el juego ha terminado');
  } else {
    if (listNumbers.includes(numGenerate)) {
      return numberRandom();
    } else {
      listNumbers.push(numGenerate);
      return numGenerate;
    }
  }
  
}

function verifyAttempt() {
  let numUser = parseInt(document.getElementById('verify').value);
   

  if (numUser === numRandom) {
    useText('p', `Acertáste el número en ${tries} ${tries === 1 ? 'intento' : 'intentos'}`);
    document.getElementById('restart').removeAttribute('disabled');
  } else {
    if (numUser > numRandom) {
      useText('p', 'El número secreto es menor');
    } else {
      useText('p', 'El número secreto es mayor');
    }
    tries++;
    cleanInput();
  }
}

function cleanInput() {
  document.querySelector('#verify').value = '';
}
function initilMessage() {
  useText('h1', 'Juego número secreto');
  useText('p', `Dame un número entre 1 y ${maxRandom}`);
  numRandom = numberRandom();
  tries = 1;
  
}

function restartGame() {
  cleanInput();
  initilMessage();
  document.querySelector('#restart').setAttribute('disabled', 'true');
}

initilMessage();