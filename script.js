const temperatureInput = document.getElementById("temperature-input");
const toFahrenheitButton = document.getElementById("celsius-fahrenheit-btn");
const toCelsiusButton = document.getElementById("fahrenheit-celsius-btn");
const convertButton = document.getElementById("convert-button");
const conversionText = document.getElementById("conversion");
let temperature;
let convertedTemperature;

function convert() {
  temperature = Number(temperatureInput.value);
  if (toFahrenheitButton.checked) {
    convertedTemperature = Math.round((temperature * 9) / 5 + 32);
    conversionText.innerText = convertedTemperature + "°F";
  } else if (toCelsiusButton.checked) {
    convertedTemperature = Math.round((temperature - 32) * (5 / 9));
    conversionText.innerText = convertedTemperature + "°C";
  } else {
    window.alert("Please check a conversion option");
  }
}

convertButton.onclick = convert;
