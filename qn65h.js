// // Shape Area:
// // Write a program that calculates and outputs the area of different 
// shapes (circle, square, triangle) based on user input using a switch case.


let result;
const shape = prompt('Enter shape ( either circle, square or rectangle ): ');
switch(shape) {
    case 'square':
        const number2 = parseFloat(prompt('Enter side: '));
         result = number2*number2;
        console.log(`the area of a square is ${result}`);
        break;

    case 'circle':
         const number1 = parseFloat(prompt('Enter radius: '));
         result = 3.14*number1*number1;
        console.log(`The area of a circle is ${result}`);
        break;

    case 'rectangle':
        const number4 = parseFloat(prompt('Enter width: '));
        const number3 = parseFloat(prompt('Enter length: '));
        result = number4 * number3;
        console.log(`The area of a rectangle is ${result}`);
        break;

    

    default:
        console.log('Invalid operator');
        break;
}