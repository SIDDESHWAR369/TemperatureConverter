const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unitFrom');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');
const celsiusResult = document.getElementById('celsiusResult');

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const unitFrom = unitFromSelect.value;

  if (!isNaN(temperature)) {
    let fahrenheit, kelvin, celsius;

    switch (unitFrom) {
      case 'celsius':
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
        celsius = temperature;
        break;
      case 'fahrenheit':
        celsius = (temperature - 32) * 5/9;
        kelvin = (temperature - 32) * 5/9 + 273.15;
        fahrenheit = temperature;
        break;
      case 'kelvin':
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        kelvin = temperature;
        break;
    }

    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";
    celsiusResult.textContent = celsius.toFixed(2) + " °C";
  } else {
    fahrenheitResult.textContent = '-';
    kelvinResult.textContent = '-';
    celsiusResult.textContent = '-';
  }
});
