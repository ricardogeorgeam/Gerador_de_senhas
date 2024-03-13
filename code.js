const valueSpan = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

let contador = 0;


function updateValue() {
    valueSpan.textContent = contador;
}


plusButton.addEventListener("click", () => {
    contador++;
    updateValue();
});


minusButton.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        updateValue();
    }
});


updateValue();
//Acima fica o código responsável por aumentar e diminuir os valores  + e - no seletor
//Abaixo fica o código responsável por calcular qual será a senha com os requisitos impostos pelo usuário

// code.js

// Função para gerar senhas
function generatePassword() {
    // Etapa 1: Capturar elementos HTML
    const passwordLength = document.getElementById('value').innerText;
    const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
    const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
    const numbersCheckbox = document.getElementById('numbersCheckbox');
    const symbolsCheckbox = document.getElementById('symbolsCheckbox');
    const passwordInput = document.getElementById('inputpasswordID');

    // Etapa 2: Obter configurações do usuário
    const length = parseInt(passwordLength);
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    // Etapa 3: Gerar senha aleatória
    const charset = createCharset(useUppercase, useLowercase, useNumbers, useSymbols);
    const password = generateRandomPassword(length, charset);

    // Etapa 4: Exibir a senha no inputpasswordID
    passwordInput.value = password;
}

// Função para criar conjunto de caracteres com base nas configurações do usuário
function createCharset(useUppercase, useLowercase, useNumbers, useSymbols) {
    let charset = '';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()-=_+[]{}|;:,.<>?';

    return charset;
}


function generateRandomPassword(length, charset) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}
document.getElementById('img1').addEventListener('click', function() {
    const passwordInput = document.getElementById('inputpasswordID');
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    const aviso = document.getElementById('aviso-copia');
    aviso.textContent = 'Senha copiada para a área de transferência!';
    aviso.style.display = 'block';


    setTimeout(function() {
        aviso.style.display = 'none';
    }, 2000);
});


document.getElementById('botao-generate').addEventListener('click', generatePassword);
document.getElementById('img2').addEventListener('click', generatePassword);
