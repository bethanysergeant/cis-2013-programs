/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Choose the lower number in your range. It must be at least zero."));
while (intMin < 0 || isNaN(intMin))
    {
        intMin = parseInt(prompt("You entered an invalid number. Enter a positive integer or zero."))
    }


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Choose the upper number in your range. It must be at least two higher than the minimum."));
while (intMax < intMin + 2 || isNaN(intMax))
    {
        intMax = parseInt(prompt("You entered an invalid number. Enter a positive integer at least two higher than your minimum."))
    }


/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);//generates random #, nothing else needed here


// set the loop counter



/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/


//get user input here and validate the input
intGuess = parseInt(prompt("Enter a number in between the max and min you established to guess the random number."));
    while ((intMin > intGuess) || (intGuess > intMax) || isNaN(intGuess))
    {
        intGuess = parseInt(prompt("Enter a valid guess."))
    }

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
 //put while loop here 
 intCount = 1;
 while (intGuess != intRandom)
{
    if (intGuess < intRandom){
        alert("Guess is too low.")
           intGuess = parseInt(prompt("Enter a number in between the max and min you established to guess the random number."));
               while ((intMin > intGuess) || (intGuess > intMax) || isNaN(intGuess))
                    {
                    intGuess = parseInt(prompt("Enter a valid guess."))
                    }
    }
    else {
        alert("Guess is too high.")
           intGuess = parseInt(prompt("Enter a number in between the max and min you established to guess the random number."));
               while ((intMin > intGuess) || (intGuess > intMax) || isNaN(intGuess))
                    {
                    intGuess = parseInt(prompt("Enter a valid guess."))
                    }
    }
    intCount++;
 }
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

/*start
	declare variables
	get intMin
	validate intMin is a number and >=0 like this…
	while intMin is NaN or is <0
		output error message
		get intMin
	endwhile
	get intMax
	validate intMax is a number and >= intMin +2 because otherwise it will be a boring game
	get intGuess
	validate that intGuess is a number between intMin and intMax as follows…
	calculate intRandom by generating a random number and making sure it falls between intMin and intMax
	set intCount = 1
	while intGuess != intRandom
		if intGuess < intRandom
			output "guess is too low“
			get intGuess
			validate intGuess
		else
			output "guess is too high“
			get intGuess
			validate intGuess
		endif
		increment intCount
	endwhile
	output congratulations and intCount
end
	*/