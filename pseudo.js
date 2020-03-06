// FIRST SOLUTION 
// const alphabet = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//     " ": " ",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "0": "-----"
// };
// const translate = () => {
//     const input = document.getElementById("input");
//     const inputValue = input.value;
//     const output = document.getElementById("output");
//     const characters = inputValue.toLowerCase().split("");
//     const morseCharacters = characters.map(char => alphabet[char]);
//     const morseString = morseCharacters.join(" ");
//     output.innerHTML = morseString;
// };
// document.getElementById("translate").addEventListener("click", translate);
// ============================================================================

// SECOND SOLUTION 

const alphabet = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
    'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', ' ': '   ',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
}
const morseAlphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "   ": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ","
}
const textToMorse = () => {
    document.querySelector('#text-output').innerHTML = "";
    const string = document.querySelector('#text-input').value;
    const regex = RegExp("^[a-zA-Z0-9 ]*$");
    if (regex.test(string)) {
        const arrayInput = string.toLowerCase().split('');
        const result = arrayInput.map(letter => alphabet[letter]).join(" ");
        return document.querySelector('#text-output').innerHTML = result;
    } else {
        return document.querySelector('#text-output').innerHTML = "Use only A-Z, a-z, 0-9 and whitespace characters"
    }
}
const decodeMorse = () => {
    const morseCode = document.querySelector('#text-input').value;
    const regex = RegExp("^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$");
    if(regex.test(morseCode)) {
    const output = morseCode.split('   ');
    const output2 = output.map(word => word.split(' ').map(letter => morseAlphabet[letter]).join(''));
    return document.querySelector('#text-output').innerHTML = output2.join(' ');
    } else {
        return document.querySelector('#text-output').innerHTML = 'Use only morse code characters';
    }
}

// otherone

const translateToMorse = (morse) => morse.toLowerCase().split("").map(mapLetter).join(" ");
const translateToText = (morse) => morse.split("   ").map(word => word.split(" ").map(changeToWords).\\\join("")).join(" ");
const mapLetter = (letter) => char[letter]; 
const changeToWords = (element) => {
    return Object.keys(char).find(key => char[key] === element);
}
const writeOutput = () => {
    let message = document.getElementById("text").value;
    if (message[0].includes(".") || message[0].includes("-")) {
        return document.getElementById("result").value = translateToText(message);
    } document.getElementById("result").value = translateToMorse(message);
}
document.getElementById("translate").addEventListener("click", writeOutput);