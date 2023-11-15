// Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//     BMI = weight(kg) / (height(m) x height(m))


function calculateBMI(weight, height) {
    // Convert height to meters (assuming input is in centimeters)
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    console.log(`your BMI is ${bmi}`)
    // Classify based on BMI
    if (bmi < 18.6) {
        return "Underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
        return "Normal and healthy";
    } else {
        return "Overweight";
    }
}

// Example usage:
const weightKg = 70; // Weight in kilograms
const heightCm = 180; // Height in centimeters
const classification = calculateBMI(weightKg, heightCm);

console.log(`your BMI Classification is ${classification}`);