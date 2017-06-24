// VARIABLES
// ================================================================================
// Objects
var bird1 = {
    "name": "macaw",
    "picture": "http://www.somepets.com/wp-content/uploads/2013/06/gold-blue-macaw-21.jpg",
    "sound": "http://www.xeno-canto.org/295503/download",
    "scientific name": "Ara ararauna"
};

var bird2 = {
    "name": "lorikeet",
    "picture": "http://www.somepets.com/wp-content/uploads/2013/06/rainbow-lorikeet.jpg",
    "sound": "http://www.xeno-canto.org/373795/download",
    "scientific name": "Trichoglossus ornatus"
};

var bird3 = {
    "name": "peacock",
    "picture": "http://www.somepets.com/wp-content/uploads/2013/06/peacock.jpg",
    "sound": "http://www.xeno-canto.org/200742/download",
    "scientific name": "Polyplectron germaini"
};

var bird4 = {
    "name": "quetzal",
    "picture": "http://www.somepets.com/wp-content/uploads/2013/06/quetzal4.jpg",
    "sound": "http://www.xeno-canto.org/30625/download",
    "scientific name": "Euptilotis neoxenus"
};

var bird5 = {
    "name": "toucan",
    "picture": "http://www.somepets.com/wp-content/uploads/2013/06/toucan.jpg",
    "sound": "http://www.xeno-canto.org/253080/download",
    "scientific name": "Andigena hypoglauca"
};

var bird6 = {
    "name": "turaco",
    "picture": "http://www.somepets.com/wp-content/uploads/2013/06/turaco3.jpg",
    "sound": "http://www.xeno-canto.org/351937/download",
    "scientific name": "Corythaeola cristata"
};



// Array of the objects
// Used with selectBird function to randomly select a target for the game
var objects = [bird1, bird2, bird3, bird4, bird5, bird6];



// Variable to track wins and write to screen
var wins = 0;




// Variable to track wins and write to screen
var losses = 0;




// Variable to track number of missed guesses, number of misses remaining, and writing to the screen.
var missesPool = 6;
var missesCount = 0;
var missesRemaining = 6;




// Array for holding all the guesses a user makes during the game
var guessArray = [];


// This is the word to be guessed
var targetWord;


// This is an array of the letters of the word to be guessed
var targetArray = [];


var correctCounter = 0;


var buttonMessage = "Start";







// FUNCTIONS
// ================================================================================

    function selectBird(arr) {
        targetWord = (arr[Math.floor(Math.random() * 6)]).name;
        console.log(targetWord);
        buildTargetArray();
        
    }


    function buildTargetArray() {
        for(var i= 0; i < targetWord.length; i++) {
            targetArray.push(targetWord.charAt(i));
        }
        drawBoxes();
    }


    function drawBoxes() {
        
        var boxes = document.querySelector("#boxes"); 
      
        for(var i = 0; i < targetArray.length; i++) {
            var newDiv = document.createElement("div");
            newDiv.classList.add("targetWordLetter");
            newDiv.id = "letterbox" + [i];
            newDiv.innerHTML = targetArray[i];
            boxes.appendChild(newDiv);
        }
        document.querySelector("#missesRemaining").innerHTML = missesRemaining;
    }

    
    function winCheck() {

        if(correctCounter === targetArray.length) {
           document.getElementById("message").innerHTML = "You win";
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            buttonMessage = "Play Again"
            document.querySelector("#button").innerHTML = buttonMessage;
           }
    }

    

    function startGame() {
        var buttonReset = document.querySelector("#startButton");
        buttonReset.setAttribute("onclick", "disabled");
        selectBird(objects);
    }



// MAIN
// ================================================================================

document.onkeyup = function(event) {
    var playerGuess = event.key;
    if(targetArray.indexOf(playerGuess)!==-1){
        for(var i = 0; i < targetArray.length; i++) {
  
            if(targetArray[i]==(playerGuess)) {
                console.log(targetArray[i]);
                var targetDiv = document.getElementById("letterbox" + [i]);
                console.log(targetDiv);
                targetDiv.style.color="black";
                correctCounter++;
            }
        }
    } else {
        console.log("wrong");
        missesCount++;
        
        if(missesRemaining === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            document.getElementById("message").innerHTML = "You lose";
           }else {
            missesRemaining = missesPool - missesCount;
            document.querySelector("#missesRemaining").innerHTML = missesRemaining;
           }

        
    }
                
    
    winCheck();
    
    guessArray.push(playerGuess);
    
    document.querySelector("#lettersGuessed").innerHTML = guessArray;
    
    console.log(guessArray);

}


    
    
    
    
    
    
    
    
    
    
    
    
// START GAME
// ================================================================================


//selectBird(objects);

document.querySelector("#wins").innerHTML = wins;

document.querySelector("#losses").innerHTML = losses;

document.querySelector("#button").innerHTML = buttonMessage;


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
