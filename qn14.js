Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1
function displayPattern(rows){
    for(let i = 0; i< rows; i++){
        let rowpattern = "";
    for(let j = rows; j>=0; j--) {
        if (j === i){
            rowpattern += "1 ";
        } else {
            rowpattern += " ";
        }
    }
    console.log(rowpattern); 
    }
}
displayPattern(5);
    
    