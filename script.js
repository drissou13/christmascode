function generateRandomPIN(length) {
    let pin = '';
    for (let i = 0; i < length; i++) {
        pin += Math.floor(Math.random() * 10);
    }
    return pin;
}

const generatedPIN = generateRandomPIN(4); // Génère un PIN de 4 chiffres
console.log('PIN généré :', generatedPIN);

function checkPIN() {
    const inputs = document.querySelectorAll('.pin');
    let enteredPIN = '';
    inputs.forEach(input => enteredPIN += input.value);

    const message = document.getElementById('message');
    if (enteredPIN === generatedPIN) {
        message.textContent = 'Code PIN Correct ! 🎉';
        message.style.color = 'green';
    } else {
        provideHint(enteredPIN);
        message.textContent = 'Code PIN Incorrect. ❌';
        message.style.color = 'red';
    }
}

function provideHint(enteredPIN) {
    const hint = [];
    for (let i = 0; i < enteredPIN.length; i++) {
        if (enteredPIN[i] === generatedPIN[i]) {
            hint.push('✓'); // Correct number and position
        } else if (generatedPIN.includes(enteredPIN[i])) {
            hint.push('?'); // Correct number, wrong position
        } else {
            hint.push('✗'); // Incorrect number
        }
    }
    const hintMessage = document.createElement('p');
    hintMessage.textContent = `Indice: ${hint.join(' ')}`;
    const hintContainer = document.getElementById('hintContainer');
    hintContainer.innerHTML = ''; // Clear previous hints
    hintContainer.appendChild(hintMessage);
}

document.addEventListener('DOMContentLoaded', () => {
    const pinInputs = document.querySelectorAll('.pin');
    pinInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (input.nextElementSibling) {
                input.nextElementSibling.focus();
            }
        });
    });
});
