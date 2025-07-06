document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const resultArea = document.getElementById('resultArea');
    
    const inputValue = document.getElementById('inputValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');

    const conversionFactors = {
        kilometers: 1000,
        miles: 1609.34,
        centimeters: 0.01,
        meters: 1 
    };

    const displayNames = {
        kilometers: 'Quilômetros',
        miles: 'Milhas',
        centimeters: 'Centímetros',
        meters: 'Metros'
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


        const valueInMeters = value * conversionFactors[from];

  
        const finalResult = valueInMeters / conversionFactors[to];


        const fromDisplayName = displayNames[from];
        const toDisplayName = displayNames[to];


        resultArea.classList.remove('error-display');
        resultArea.innerHTML = `<strong>${value}</strong> ${fromDisplayName} equivalem a <br><strong>${finalResult.toFixed(4)}</strong> ${toDisplayName}`;
    });
});
