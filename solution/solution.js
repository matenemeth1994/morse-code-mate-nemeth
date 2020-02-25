const alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
};

const translate = () => {
    // this is your input 
    const input = document.getElementById("input");
    // this is the value of the input 
    const inputValue = input.value;
    // this is the output 
    const output = document.getElementById("output");
    // new array with inputvalue make lowercase and split up , split make an array of substrings, in this case it separates all the letters
    const characters = inputValue.toLowerCase().split("");
    // new array, iterating through the Object, get each element of the object in the iteration
    const morseCharacters = characters.map(char => alphabet[char]);
    // join converts an array into a string 
    const morseString = morseCharacters.join(" ");
    // print it to the output 
    output.innerHTML = morseString;
};
// click function for the button 
document.getElementById("translate").addEventListener("click", translate);
// -----------------------------------------------------------------------------------------------


// const translate = () => {
//     const input = document.getElementById("input");
//     const inputValue = input.value;
//     const output = document.getElementById("output");
//     const inputLetter = inputValue.toLowerCase().split("");
//     const iterateArray = inputLetter.map(letter => alphabet[letter]);
//     const convertArray = iterateArray.join(" ");
//     output.innerHTML = convertArray;
// }

// document.getElementById("translate").addEventListener("click", translate);