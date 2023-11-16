// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input 
// and uses a switch case to perform the corresponding operation.

function simpleCalculator(a,b){
    switch(a,b){
        case 1:
            return a + b; //addition
            break;
        case 2:
            return a - b; //subtraction
            break;
        case 3:
            return a * b; //multiplication
            break;
        case 4:
            return a / b; // division
            break;
        default:
            return "invalid input" ;                   
    }
}
console.log(simpleCalculator(1))