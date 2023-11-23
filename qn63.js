// Write a function that converts a temperature from Celsius to Fahrenheit.
function temperatureConverter(tCelcius){
    const tFahrenheit = (tCelcius * 9/5) + 32;
    return tFahrenheit;
}
//using example tCelcius = 8;
console.log(`the temperature from celcius to Fahrenheit is ${temperatureConverter(8)}`)