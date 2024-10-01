let rand_num = Math.floor(Math.random() * 100) + 1;
const guess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.loworHi');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
let guessCount = 1;
let resetBt;

guessSubmit.addEventListener('click', () =>{
    const userGuess = Number(guessField.value);
    // while(guessCount<=10){
        if (guessCount === 1) {
            guess.textContent = 'Previous guesses: ';
        }
  
          guess.textContent = `${guess.textContent} ${userGuess}`;
        if(userGuess === rand_num){
            lastResult.textContent = 'Congratulations , you won!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            setGameOver();
        }

        else if(guessCount === 10){
            lastResult.textContent = 'Game Over, you lost!';
            lowOrHi.textContent = '';
            setGameOver();
        }

        else{
            if(userGuess > rand_num){
                lowOrHi.textContent = 'Guess Number is too high, Try again';
        
            }
            else if(userGuess < rand_num){
                lowOrHi.textContent = 'Guess Number is too Low, Try again';
            }
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
    
        }
        guessCount++;
        guessField.value ='';
        guessField.focus();
    // }
});
console.log(rand_num)
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetBt = document.createElement('button');
    resetBt.textContent = 'Play Again';
    document.body.appendChild(resetBt);
    resetBt.addEventListener('click', ()=>{
        location.reload();
        // const resetResult = document.querySelectorAll('.result');
        // guessCount = 1;
        // for(const x of resetResult){
            
        //     x.textContent = '';
        // }
        // guessField.disabled = false;
        // guessField.value = '';
        // guessSubmit.disabled = false;
        // resetBt.remove();
        // lastResult.style.backgroundColor = 'white';
        // rand_num = Math.floor(Math.random() * 100)+1;
        // console.log(rand_num)
    }) 


}
