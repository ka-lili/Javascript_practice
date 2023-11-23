// Grade System:
// Design a grading system that takes a student's score as input 
// and returns the corresponding grade using a switch case.
function gradingSystem(score) {
    var grade;
  
    switch(true) {
      case (score <= 100 && score >= 90):
         grade = 'A';
          break;
      case (score <= 89 && score >= 80):
          grade = 'B';
           break;
      case (score <= 79 && score >= 70):
          grade = 'C';
           break;
         case (score <= 69 && score >= 60):
          grade = 'D';
           break;
      case (score <= 59 && score >= 0):
          grade = 'F';
          break;
  
      case (score > 100 && score < 0):
          grade = 'INVALID SCORE';
          break; 
  
       case (score <= 2 && score >= 0):
          grade += '-';
          break; 
  
        case (score <= 9 && score >= 8):
          grade += '+';
          break; 
  
      default:
        return 'INVALID SCORE';
  }
  
    return grade;
  }
  
  var output = gradingSystem(91);
  console.log(output); // --> MUST OUTPUT 'A-