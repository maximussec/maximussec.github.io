document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const resultArea = document.getElementById('resultArea');
    
    const inputValue = document.getElementById('inputValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');

    const displaySymbols = {
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K'
    };

    convertBtn.addEventListener('click', () => {
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(inputValue.value);

        if (isNaN(value)) {
            resultArea.innerHTML = '<span class="error-text">Por favor, insira um valor numérico válido.</span>';
            resultArea.classList.add('error-display');
            return;
        }

        if (from === to) {
            resultArea.classList.remove('error-display');
            resultArea.innerHTML = `O valor já está na unidade desejada: <strong>${value.toFixed(2)}</strong> ${displaySymbols[to]}`;
            return;
        }

        let valueInCelsius;
        switch (from) {
            case 'fahrenheit':
                valueInCelsius = (value - 32) * 5 / 9;
                break;
            case 'kelvin':
                valueInCelsius = value - 273.15;
                break;
            default: 
                valueInCelsius = value;
                break;
        }

        let finalResult;
        switch (to) {
            case 'fahrenheit':
                finalResult = (valueInCelsius * 9 / 5) + 32;
                break;
            case 'kelvin':
                finalResult = valueInCelsius + 273.15;
                break;
            default: 
                finalResult = valueInCelsius;
                break;
        }

        const fromDisplayName = displaySymbols[from];
        const toDisplayName = displaySymbols[to];

        resultArea.classList.remove('error-display');
        resultArea.innerHTML = `<strong>${value}</strong> ${fromDisplayName} equivalem a <br><strong>${finalResult.toFixed(2)}</strong> ${toDisplayName}`;
    });
});
