
var numbers = [1, 2, 3, 4, 5, 6];

var rdmNum = numbers[Math.floor(Math.random()*numbers.length)];

console.log(rdmNum, rdmNum);



function guess() {
    let input = prompt("Please enter your guess");

    let code = ['4', '4', '3', '1'];
    
// check the input and compare each input number with each number from array
// if they are equal > true > give hint how many are right
// if they are not equal > false 

        if (input == code){
            console.log('You win!');
            document.getElementById("answer").innerHTML = "You win!";
        } else if (input[0] == code[0]){
            console.log('First digit is right');
            document.getElementById("answer").innerHTML = "First digit is correct";
        } else if (input[1] == code[1]){
            console.log('Second digit is right');
            document.getElementById("answer").innerHTML = "Second digit is correct";
        } else if (input[2] == code[2]){
            console.log('Third digit is right');
            document.getElementById("answer").innerHTML = "Third digit is correct";
        } else if (input[3] == code[3]){
            console.log('Fourth digit is right');
            document.getElementById("answer").innerHTML = "Fourth digit is correct";
        } 
        else {
            console.log('No digit is right');
            document.getElementById("answer").innerHTML = "No digit is right";
        }
}


// while (input != code) {}



// First try of checking numbers

//     if (input == code[0]) {
//       document.getElementById("answer").innerHTML =
//       "1 is correct";
//     } else if (input == code[0] , code[1] , code[2] , code[3]) {
//         document.getElementById("answer").innerHTML =
//       "4 are correct. You win!";
//     } 
//     else {
//         document.getElementById("answer").innerHTML =
//       "None of the digits are at the right position. Try again.";
//     }
// }
