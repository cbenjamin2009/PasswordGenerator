const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUpperCaseElement = document.getElementById('includeUpperCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const passwordDisplay = document.getElementById('passwordDisplay')

const form = document.getElementById('passwordGeneratorForm')

const UPPERCASE_CHAR_CODES= arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES= arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CDOES= arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CDOES= arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountRange.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
})

function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols){
   
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CDOES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CDOES)

    const passwordCharacters = []

    for (let i=0; i<characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');

}

function arrayFromLowToHigh(low, high){
    const array=[]
    for (let i = low; i<= high; i++){
array.push(i)
    }
    return array;
}