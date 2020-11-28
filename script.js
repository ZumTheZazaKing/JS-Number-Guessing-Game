//declaring a variable to store the random number for easy mode
let theNumberEasy = Math.floor(Math.random()*100);

//declaring a variable to store the random number for normal mode
let theNumberNormal = Math.floor(Math.random()*1000);


//declaring a variable to store the random number for hard mode
let theNumberHard = Math.floor(Math.random()*10000);

//declaring a variable to store the random number for bey hard mode
let theNumberVeryHard = Math.floor(Math.random()*100000);

//declaring a variable to store the random number for insane mode
let theNumberInsane = Math.floor(Math.random()*1000000);

//setting the default difficulty to easy 
let difficulty = 'Easy';

let guessesLeft = 10;

//a function for the guess button
function guessNumber(){

    //Grabbing the user's guess
    let userGuess = document.getElementById('guess').value;

    //if the difficulty is easy...
    if(difficulty == 'Easy'){

        //if the user's guess is same with the random number for easy mode...
        if(userGuess == theNumberEasy){

            //changing the text for 'result'
            document.getElementById('result').innerText = 
            'You guessed the number! It was ' + userGuess;

            //changing the text for 'rec'
            document.getElementById('rec').innerText =
            'You can either try again or play on another difficulty!'

            //coloring the 'result' paragraph to green
            document.getElementById('result').classList.add('correct');

            //revealing the result paragraph 
            document.getElementById('result').classList.remove('hide');

            //revraling the 'rec' paragraph
            document.getElementById('rec').classList.remove('hide');

            //hiding the guess button
            document.getElementById('guessButton').classList.add('hide');

            //revealing the try again button
            document.getElementById('tryAgainButton').classList.remove('hide');

        //if the user's unput is not the same as the random number for easy mode...
        } else if (userGuess != theNumberEasy){

            //reveal the 'result' paragraph
            document.getElementById('result').classList.remove('hide');

            document.getElementById('rec').classList.remove('hide');

            //if the user's input is smaller than the easy mode random number...
            if(userGuess < theNumberEasy){

                //change the text to the following
                document.getElementById('result').innerText =
                'The number you guessed is lesser than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            } else if (userGuess > theNumberEasy){

                document.getElementById('result').innerText = 
                'The number you guessed is greater than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            }

        }

    } else if(difficulty == 'Normal'){

        //if the user's guess is same with the random number for easy mode...
        if(userGuess == theNumberNormal){

            //changing the text for 'result'
            document.getElementById('result').innerText = 
            'You guessed the number! It was ' + userGuess;

            //changing the text for 'rec'
            document.getElementById('rec').innerText =
            'You can either try again or play on another difficulty!'

            //coloring the 'result' paragraph to green
            document.getElementById('result').classList.add('correct');

            //revealing the result paragraph 
            document.getElementById('result').classList.remove('hide');

            //revraling the 'rec' paragraph
            document.getElementById('rec').classList.remove('hide');

            //hiding the guess button
            document.getElementById('guessButton').classList.add('hide');

            //revealing the try again button
            document.getElementById('tryAgainButton').classList.remove('hide');

        //if the user's unput is not the same as the random number for easy mode...
        } else if (userGuess != theNumberNormal){

            //reveal the 'result' paragraph
            document.getElementById('result').classList.remove('hide');

            document.getElementById('rec').classList.remove('hide');

            //if the user's input is smaller than the easy mode random number...
            if(userGuess < theNumberNormal){

                //change the text to the following
                document.getElementById('result').innerText =
                'The number you guessed is lesser than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            } else if (userGuess > theNumberNormal){

                document.getElementById('result').innerText = 
                'The number you guessed is greater than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            }

        }
        
    } if(difficulty == 'Hard'){

        //if the user's guess is same with the random number for easy mode...
        if(userGuess == theNumberHard){

            //changing the text for 'result'
            document.getElementById('result').innerText = 
            'You guessed the number! It was ' + userGuess;

            //changing the text for 'rec'
            document.getElementById('rec').innerText =
            'You can either try again or play on another difficulty!'

            //coloring the 'result' paragraph to green
            document.getElementById('result').classList.add('correct');

            //revealing the result paragraph 
            document.getElementById('result').classList.remove('hide');

            //revraling the 'rec' paragraph
            document.getElementById('rec').classList.remove('hide');

            //hiding the guess button
            document.getElementById('guessButton').classList.add('hide');

            //revealing the try again button
            document.getElementById('tryAgainButton').classList.remove('hide');

        //if the user's unput is not the same as the random number for easy mode...
        } else if (userGuess != theNumberHard){

            //reveal the 'result' paragraph
            document.getElementById('result').classList.remove('hide');

            document.getElementById('rec').classList.remove('hide');

            //if the user's input is smaller than the easy mode random number...
            if(userGuess < theNumberHard){

                //change the text to the following
                document.getElementById('result').innerText =
                'The number you guessed is lesser than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            } else if (userGuess > theNumberHard){

                document.getElementById('result').innerText = 
                'The number you guessed is greater than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            }

        }
        
    } if(difficulty == 'Very Hard'){

        //if the user's guess is same with the random number for easy mode...
        if(userGuess == theNumberVeryHard){

            //changing the text for 'result'
            document.getElementById('result').innerText = 
            'You guessed the number! It was ' + userGuess;

            //changing the text for 'rec'
            document.getElementById('rec').innerText =
            'You can either try again or play on another difficulty!'

            //coloring the 'result' paragraph to green
            document.getElementById('result').classList.add('correct');

            //revealing the result paragraph 
            document.getElementById('result').classList.remove('hide');

            //revraling the 'rec' paragraph
            document.getElementById('rec').classList.remove('hide');

            //hiding the guess button
            document.getElementById('guessButton').classList.add('hide');

            //revealing the try again button
            document.getElementById('tryAgainButton').classList.remove('hide');

        //if the user's unput is not the same as the random number for easy mode...
        } else if (userGuess != theNumberVeryHard){

            //reveal the 'result' paragraph
            document.getElementById('result').classList.remove('hide');

            document.getElementById('rec').classList.remove('hide');

            //if the user's input is smaller than the easy mode random number...
            if(userGuess < theNumberVeryHard){

                //change the text to the following
                document.getElementById('result').innerText =
                'The number you guessed is lesser than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            } else if (userGuess > theNumberVeryHard){

                document.getElementById('result').innerText = 
                'The number you guessed is greater than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            }

        }
        
    }    if(difficulty == 'Insane'){

        //if the user's guess is same with the random number for easy mode...
        if(userGuess == theNumberInsane){

            //changing the text for 'result'
            document.getElementById('result').innerText = 
            'You guessed the number! It was ' + userGuess;

            //changing the text for 'rec'
            document.getElementById('rec').innerText =
            'You can either try again or play on another difficulty!'

            //coloring the 'result' paragraph to green
            document.getElementById('result').classList.add('correct');

            //revealing the result paragraph 
            document.getElementById('result').classList.remove('hide');

            //revraling the 'rec' paragraph
            document.getElementById('rec').classList.remove('hide');

            //hiding the guess button
            document.getElementById('guessButton').classList.add('hide');

            //revealing the try again button
            document.getElementById('tryAgainButton').classList.remove('hide');

        //if the user's unput is not the same as the random number for easy mode...
        } else if (userGuess != theNumberInsane){

            //reveal the 'result' paragraph
            document.getElementById('result').classList.remove('hide');

            document.getElementById('rec').classList.remove('hide');

            //if the user's input is smaller than the easy mode random number...
            if(userGuess < theNumberInsane){

                //change the text to the following
                document.getElementById('result').innerText =
                'The number you guessed is lesser than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            } else if (userGuess > theNumberInsane){

                document.getElementById('result').innerText = 
                'The number you guessed is greater than the hidden number';

                guessesLeft--;

                document.getElementById('rec').innerText = 
                'You have about ' + guessesLeft + ' guesses left'

            }

        }
        
    }

    if(guessesLeft == 0){

        document.getElementById('result').classList.remove('hide');
    
        document.getElementById('rec').classList.remove('hide');
    
        document.getElementById('guessButton').classList.add('hide');
    
        document.getElementById('tryAgainButton').classList.remove('hide');
    
        document.getElementById('result').innerText = 'GAME OVER';
    
        if(difficulty == 'Easy'){
            document.getElementById('rec').innerText = 'The number was ' + theNumberEasy;
        } else if (difficulty == 'Normal'){
            document.getElementById('rec').innerText = 'The number was ' + theNumberNormal;
        } else if (difficulty == 'Hard'){
            document.getElementById('rec').innerText = 'The number was ' + theNumberHard;
        } else if (difficulty == 'Very Hard'){
            document.getElementById('rec').innerText = 'The number was ' + theNumberVeryHard;
        } else if (difficulty == 'Insane'){
            document.getElementById('rec').innerText = 'The number was ' + theNumberInsane;
        }
    }

};

//the function for the try again button
function reloadPage(){
    window.location.reload();
};


function setEasy(){

    document.getElementById('guess').value = '';

    guessesLeft = 10;

    document.getElementById('desc').innerText =
    'The computer has chosen a number between 1 to 100.' + 
    ' Try your luck and guess it!';

    document.getElementById('result').classList.add('hide');

    document.getElementById('result').classList.remove('correct');

    document.getElementById('rec').classList.add('hide');

    document.getElementById('tryAgainButton').classList.add('hide');

    document.getElementById('guessButton').classList.remove('hide');

    difficulty = 'Easy';

    document.body.style.backgroundColor = '#64dd6c';

};

function setNormal(){

    document.getElementById('guess').value = '';

    guessesLeft = 15;

    document.getElementById('desc').innerText =
    'The computer has chosen a number between 1 to 1000.' + 
    ' Try your luck and guess it!';

    document.getElementById('result').classList.add('hide');

    document.getElementById('result').classList.remove('correct');

    document.getElementById('rec').classList.add('hide');

    document.getElementById('tryAgainButton').classList.add('hide');

    document.getElementById('guessButton').classList.remove('hide');

    difficulty = 'Normal';

    document.body.style.backgroundColor = '#e2e458';

};

function setHard(){

    document.getElementById('guess').value = '';

    guessesLeft = 20;

    document.getElementById('desc').innerText =
    'The computer has chosen a number between 1 to 10000.' + 
    ' Try your luck and guess it!';

    document.getElementById('result').classList.add('hide');

    document.getElementById('result').classList.remove('correct');

    document.getElementById('rec').classList.add('hide');

    document.getElementById('tryAgainButton').classList.add('hide');

    document.getElementById('guessButton').classList.remove('hide');

    difficulty = 'Hard';

    document.body.style.backgroundColor = '#f24040';

};

function setVeryHard(){

    document.getElementById('guess').value = '';

    guessesLeft = 25;

    document.getElementById('desc').innerText =
    'The computer has chosen a number between 1 to 100000.' + 
    ' Try your luck and guess it!';

    document.getElementById('result').classList.add('hide');

    document.getElementById('result').classList.remove('correct');

    document.getElementById('rec').classList.add('hide');

    document.getElementById('tryAgainButton').classList.add('hide');

    document.getElementById('guessButton').classList.remove('hide');

    difficulty = 'Very Hard';

    document.body.style.backgroundColor = '#7b0c7d';

};

function setInsane(){

    document.getElementById('guess').value = '';

    guessesLeft = 30;

    document.getElementById('desc').innerText =
    'The computer has chosen a number between 1 to 1000000.' + 
    ' Try your luck and guess it!';

    document.getElementById('result').classList.add('hide');

    document.getElementById('result').classList.remove('correct');

    document.getElementById('rec').classList.add('hide');

    document.getElementById('tryAgainButton').classList.add('hide');

    document.getElementById('guessButton').classList.remove('hide');

    difficulty = 'Insane';

    document.body.style.backgroundColor = 'black';

};




