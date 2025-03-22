// Function to calculate BMI
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2); // Rounds to 2 decimal places
}

// Example usage
let weight = parseFloat(prompt("Enter your weight in kg:"));
let height = parseFloat(prompt("Enter your height in meters:"));

if (isNaN(weight) || isNaN(height) || height <= 0) {
    console.log("Please enter valid numbers for weight and height.");
} else {
    let bmi = calculateBMI(weight, height);
    console.log(`Your BMI is: ${bmi}`);
    
    // BMI Classification
    if (bmi < 18.5) {
        console.log("You are underweight.");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("You have a normal weight.");
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log("You are overweight.");
    } else {
        console.log("You are obese.");
    }
}

