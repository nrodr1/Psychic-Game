<script type="text/javascript">
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesThusFar = [];

//Array of possible choices to play the game.
    var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Function tied to the user taking a guess followed by computer guess.
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Now the computer takes a guess.
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];

        guessesThusFar.push(userGuess);

//Comparing user guess with computer guess to determine a winner and following logic.
        if (userGuess == computerGuess) {
            wins++;
            alert('You guesesed corrrectly. Awesome!');
            guessesLeft = 10;


            guessesThusFar.length = 0; 
        }

        else if (guessesLeft == 0){
            losses++;
            alert('Your guess is incorrect. You lost. Try again.');
            guessesLeft = 10;
            guessesThusFar.length = 0;
        }

        else if (userGuess !== computerGuess){
            guessesLeft--;
        }  
        
// Adding scores and displaying them within the HTML for the user to see/keep track.  
        var html = "<h1>Psychic Game</h1>" + 

        "<p>Can you guess what letter I, the Crystal Ball, am thinking of?<br></p>" +
        
        "<p><h1>Scoreboard</h1></p>" +

        "<p>Total Wins: " + 
        wins + 
        "<br>" +
        "Total Losses: " + 
        losses + 
        "<br><br>" +
        "Guesses Left in This Round: " + 
        guessesLeft + 
        "<br>" +
        "Your Guesses Thus Far: " +
        guessesThusFar +
        "</p>"
        ;

        document.querySelector('#psychic').innerHTML = html;
    }
</script>