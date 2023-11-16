// Create a program that takes a number representing a day of the week (1-7) 
// and outputs the name of the day.

function daysOfWeek(day){
    
    switch(day){
        case 1:
            return 'Today is monday';
            break;
        case 2:
            return 'Today is tuesday';
            break;
        case 3:
            return 'Today is wednesday';
            break;    
        case 4:
            return 'Today is thursday';
            break;
        case 5:
            return 'Today is friday';
            break; 
        case 6:
            return 'Today is saturday';
            break; 
        case 7:
            return 'Today is sunday';
            break;     
        default:
            return "please enter number from 1 to 7"     
    }
    }
    console.log(daysOfWeek(8))
    