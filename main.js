const morseCode = [
    {key: "a", a: '._'},
    {key: 66, b: '_...'},
    {key: 67, c: '_._.'},
    {key: 68, d: '_..'},
    {key: 69, e: '.'},
    {key: 70, f: '.._.'},
    {key: 71, g: '__.'},
    {key: 72, h: '....'},
    {key: 73, i: '..'},
    {key: 74, j: '.___'},
    {key: 75, k: '_._'},
    {key: 76, l: '._..'},
    {key: 77, m: '__'},
    {key: 78, n: '_.'},
    {key: 79, o: '___'},
    {key: 80, p: '.__.'},
    {key: 81, q: '__._'},
    {key: 82, r: '._.'},
    {key: 83, s: '...'},
    {key: 84, t: '_'},
    {key: 85, u: '.._'},
    {key: 86, v: '..._'},
    {key: 87, w: '.__'},
    {key: 88, x: '_.._'},
    {key: 89, y: '_.__'},
    {key: 90, z: '__..'},
    {key: 48, 0: '_____'},
    {key: 49, 1: '.____'},
    {key: 50, 2: '..___'},
    {key: 51, 3: '...__'},
    {key: 52, 4: '...._'},
    {key: 53, 5: '.....'},
    {key: 54, 6: '_....'},
    {key: 55, 7: '__...'},
    {key: 56, 8: '___..'},
    {key: 57, 9: '____.'}
];
// const morseCode = [{}, {}, {}];
// ------------------------------------------------------------------------
// PASS IN TEXT TO THE INPUT-TEXTAREA AND OUTPUT IT TO THE OUTPUT-CONSOLE 
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const myFunction = () => {
    return outputText.value = newArray;
}
// ------------------------------------------------------------------------
// DISPLAYING THE FIRST OBJECT OF AN ARRAY ---------------------------
// const firstObject = morseCode[0];
// const displayObject = morseCode[0].a;
// -------------------------------a----------------------------------------------
// RETURNS ALL THE VALUES OF THE KEYS OF THE OBJECTS-----------------------
const iterateKey = (morseCodeArray) => {
    const newArray = morseCodeArray.filter(everyKey);
    return newArray;
}
const everyKey = (letter) => {
    return letter.key.value == inputText.value;
}
// ----------------------------------------------------------------------------
// UNICODE ----------------------------------------------------------------
const myFunction2 = (event) => event.charCode;
// -----------------------------------------------------------------------

// const myFunction4 = (objects) => {
//     const iterateArray = objects.filter(myFunction3);
//     return iterateArray;
// }

// const myFunction3 = (letter) => {
//     if (newEvent == morseCode[letter].key) {
//         return outputText.value = morseCode.letter;
//     }
// }



