// var emptyString = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";

// while (emptyString.length < 6) {
//   emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
// } 
// console.log(emptyString);

// var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var rand = letter[Math.floor(Math.random() * letter.length)];
// console.log(rand);
var wins = 0;
var losses = 0;
var guessNumber = 9;
var guessed = [];
var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rand = letter[Math.floor(Math.random() * letter.length)];
console.log(rand);

document.onkeyup = function(event) {
	var userGuess = event.key;
	if (userGuess == rand){
		// alert("You got it!!");
		wins ++;
		document.getElementById("wins").innerHTML = ("Wins: " + wins);
		guessed = [];
		document.getElementById("guessed").innerHTML = ("Your guesses so far: ");
		guessNumber = 9;
		document.getElementById("guessNumber").innerHTML = ("Guesses Left: " + guessNumber);
		
	}

	else if (userGuess !== rand){
		// var userGuess = event.key;
		guessNumber = guessNumber - 1;
		document.getElementById("guessNumber").innerHTML = ("Guesses Left: " + guessNumber);
		guessed.push(userGuess);
		document.getElementById("guessed").innerHTML = ("Your guesses so far: " + guessed);
		
	};
}
