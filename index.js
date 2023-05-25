function converter() {
    const temperaturaInput = document.getElementById('temperatura');
    const tipoInput = document.getElementById('tipo');
    const resultadoDiv = document.getElementById('resultado');
  
    const temperatura = parseFloat(temperaturaInput.value);
    const tipo = tipoInput.value;
  
    if (isNaN(temperatura)) {
      resultadoDiv.innerHTML = 'Insira uma temperatura válida';
      resultadoDiv.className = '';
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    switch (tipo) {
      case 'celsius':
        celsius = temperatura;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
        break;
      case 'fahrenheit':
        fahrenheit = temperatura;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
        break;
      case 'kelvin':
        kelvin = temperatura;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        break;
    }
  
    const resultado = `
      Celsius: ${celsius.toFixed(2)}<br>
      Fahrenheit: ${fahrenheit.toFixed(2)}<br>
      Kelvin: ${kelvin.toFixed(2)}
    `;
  
    resultadoDiv.innerHTML = resultado;
    resultadoDiv.className = '';
  
    if (celsius < 20) {
      resultadoDiv.classList.add('blue-bg');
    } else if (celsius >= 20 && celsius <= 35) {
      resultadoDiv.classList.add('yellow-bg');
    } else {
      resultadoDiv.classList.add('red-bg');
    }
  }
  