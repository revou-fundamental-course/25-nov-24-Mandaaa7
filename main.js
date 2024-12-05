// script.js
document.getElementById('calculate').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight!');
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    const result = document.getElementById('bmi-result');
    const category = document.getElementById('bmi-category');

    result.textContent = bmi;

    if (bmi < 18.5) {
        category.textContent = 'Underweight';
        category.style.color = '#ffa502';
    } else if (bmi < 24.9) {
        category.textContent = 'Normal weight';
        category.style.color = '#2ed573';
    } else if (bmi < 29.9) {
        category.textContent = 'Overweight';
        category.style.color = '#ffa502';
    } else {
        category.textContent = 'Obesity';
        category.style.color = '#ff4757';
    }
});
