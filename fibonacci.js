//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}


var generate = function () //receives user input, validates it, calculates the fib #s, and prints them
{
	var intNumber = parseInt($("total_fib").value);  //gets user input from the DOM
	
    if((intNumber < 2) || (intNumber > 100) || isNaN(intNumber))//validates user input
    {
        alert("You entered an invalid number. Enter a number between 2 and 100.")
        $("total_fib").value = "";//clears input box
        $("output").value= "";//clears output box
    }
    
    
    else{ //established necessary variables before the loop (such as initializing the counter)

	
	var i = 0;  /* sets the first number in the Fibonacci series to 0*/
	var j = 1;  /* sets the second number in the Fibonacci series to 1*/
	var k;    /* k is calculated by adding i+j and represents the next Fibonacci number*/
	var stringOutput = "0 1"; //initializes the Fibonacci series output to include the first two numbers

    var intCount = 2;
    while (intCount <= intNumber)//calclates the fibbonacci #s
    {
        k = i + j;
        i = j;
        j = k;
        stringOutput = stringOutput + " " + k;
        console.log(stringOutput)
        intCount ++;
    }
    $("output").value = stringOutput;//sends stringOutput back to DOM and displays text
	
    }
} 


window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}