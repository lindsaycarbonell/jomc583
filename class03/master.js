

// create a javascript file app.js and include it in a basic html template with a single h1 that says "javascript practice"



function farToCel(far_temp){
    var tempInCel = Math.floor((far_temp-32) * (5/9));
    console.log("Temperature in Celsius: " + tempInCel);
    
    if(tempInCel < 10){
        console.log("The current temperature is " + tempInCel + " degrees Celsius. It's cold outside.");
    } else if (tempInCel > 10 && tempInCel < 25){
        console.log("The current temperature is " + tempInCel + " degrees Celsius. It's fair outside.");
    } else if (tempInCel > 25){
        console.log("The current temperature is " + tempInCel + " degrees Celsius. It's hot outside.");
    }
    
    
}

farToCel(36);

// 2. write a function "sum" that will take a parameter array of numbers and print out the sum of the numbers in the array

function sum(numArray){
    console.log("sum called");
}




// 3. write a function "greatestNumber" that will take a parameter array of numbers and print out the largest number in the array
//

function greatestNumber(numArray){
    console.log("num array called");
    var currentNum = 0; 
    var highestNum = 0;
    for(var i = 0; i < numArray.length; i++){
        currentNum = numArray[i];
        console.log("current num is: " + currentNum);
        if(currentNum > highestNum){
            highestNum = currentNum;
            console.log("current num is bigger than highest num.");
        }
            
    }
    console.log("highest number in array is: " + highestNum);
    
    
}

newArray = [10, 20, 100, 2, 5];

sum(newArray);

// 3. write a function "greatestNumber" that will take a parameter array of numbers and print out the largest number in the array
//
//  ex. input
//  [10, 20, 100, 2, 5]
//
//  ex. output
//  100

// 4. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. (hint: http://www.w3schools.com/jsref/jsref_charat.asp)

//  ex. input
//  "my name is seth"
//
//  ex. output
//  m: 2
//  y: 1
//  s: 2
//  ... so on

// 5. write a function that logs out the Fibonacci sequence until it reaches a parameter "max"

//  ex. input
//  25
//
//  ex. output
//  1
//  1
//  2
//  3
//  5
//  8
//  13
//  21
