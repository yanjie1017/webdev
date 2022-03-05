const pwElement = document.getElementById('pw');
const copyElement = document.getElementById('copy');
const lenElement = document.getElementById('len');
const upperElement = document.getElementById('upper');
const lowerElement = document.getElementById('lower');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqgstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-+_=';

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    // Reset copy
    copyElement.innerText = 'Copy';

    const len = lenElement.value;
    let passwordArr = generateBase();

    // None of the checkboxes is selected
    if (!passwordArr.length) {
        pwElement.innerText = 'Please select at least one type of input!';
        return;
    }

    const remainingLen = len - passwordArr.length;
    for (let i = 0; i < remainingLen; i++) {
        passwordArr.push(generateX());
    }

    passwordArr = shuffle(passwordArr);
    let password = passwordArr.join('');
    pwElement.innerText = password;
}

function generateBase() {
    let baseArr = [];
    if (upperElement.checked) {
        baseArr.push(getUpperCase());
    }
    if (lowerElement.checked) {
        baseArr.push(getLowerCase());
    }
    if (numberElement.checked) {
        baseArr.push(getNumber());
    }
    if (symbolElement.checked) {
        baseArr.push(getSymbol());
    }
    return baseArr;
} 

function generateX() {
    let xArr = [];
    if (upperElement.checked) {
        xArr.push(getUpperCase());
    }
    if (lowerElement.checked) {
        xArr.push(getLowerCase());
    }
    if (numberElement.checked) {
        xArr.push(getNumber());
    }
    if (symbolElement.checked) {
        xArr.push(getSymbol());
    }
    return xArr[Math.floor(Math.random() * xArr.length)];
} 

function shuffle(arr) {
    let currIdx = arr.length;
    let randIdx;
    // While there remain elements to shuffle
    while (currIdx != 0) {
      // Pick a remaining element
      randIdx = Math.floor(Math.random() * currIdx);
      currIdx--;
      // And swap it with the current element
      [arr[currIdx], arr[randIdx]] = [arr[randIdx], arr[currIdx]];
    }
    return arr;
}

function copyPassword() {
    navigator.clipboard.writeText(pwElement.innerText);
    copyElement.innerText = 'Copied!';
}

generateElement.addEventListener('click', generatePassword);

copyElement.addEventListener('click', copyPassword);
