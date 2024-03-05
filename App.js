function convertirFahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function convertir() {
    // Obtener la temperatura en Fahrenheit del campo de entrada
    let fahrenheit = document.getElementById("fahrenheit").value;
  
    // Convertir la temperatura a Celsius
    let celsius = convertirFahrenheitACelsius(fahrenheit);
  
    // Mostrar la temperatura en la consola
    console.log(`Fahrenheit: ${fahrenheit}°F - Celsius: ${celsius.toFixed(2)}°C`);
  
    // Mostrar la temperatura en el elemento "resultado"
    document.getElementById("resultado").innerHTML = `Fahrenheit: ${fahrenheit}°F - Celsius: ${celsius.toFixed(2)}°C`;
  }
  