const button = document.querySelectorAll('.btn');
const body = document.querySelector('body');

button.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target)

        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = 'red';
                body.style.color = 'white'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                body.style.color = 'black'
                break; case 'green':
                body.style.backgroundColor = 'green';
                body.style.color = 'white'
                body.style.button = ''
                break; case 'black':
                body.style.backgroundColor = 'black';
                body.style.color = 'white'
                break; case 'blue':
                body.style.backgroundColor = 'blue';
                body.style.color = 'white'
                break;
                break; case 'white':
                body.style.backgroundColor = 'white';
                body.style.color = 'black'
                break;
            default:
                break;
        }

    })

})


// form

const randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        numGuess++;  // Increment the number of guesses
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number Was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess) {

    if (guess === randomNumber) {
        displayMessage(`You won the game`)
        endGame()
    } else if (guess < randomNumber) {

        displayMessage(`Number is too low`)

    }
    else if (guess > randomNumber) {

        displayMessage(`Number is too high`)

    }

}

function displayGuess(guess) {

    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    remainingResult.innerHTML = `${10 - numGuess}`;
}


function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainingResult.innerHTML = '10';
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        randomNumber = (parseInt(Math.random() * 100 + 1)); // Generate a new random number
    });
}

