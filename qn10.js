// Create a function that displays a patern like this:
//    * * * * *
//    * * * * *
//    * * * * *
//    * * * * *
// function printPattern(rows, columns) {
//     for (let i = 0; i < rows; i++) {
//         let row = '';
//         for (let j = 0; j < columns; j++) {
//             row += '* ';
//         }
//         console.log(row);
//     }
// }


// const numberOfRows = 4;
// const numberOfColumns = 5;
// printPattern(numberOfRows, numberOfColumns);

function pattern(rows,columns){
    for( i=0; i<rows;i++){
        console.log('* '.repeat(columns))
    }
}
pattern(4,5)