let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

let input = document.getElementById('input');
let output = document.getElementById('output');

// const encrypt = () => {
//     let inputty = (input.value.toUpperCase());
//     let ergebnis = "";
//     for (let i = 0; i < morseAlphabet.length; i++) {
//         for (let k = 0; k < inputty.length; k++) {
//             if (morseAlphabet[i].letter == inputty[k]) {
//                 ergebnis += morseAlphabet[i].morseCode;
//             }
//         }
//     } console.log(ergebnis);
//     output.innerHTML = ergebnis;
// }

const encrypt = () => {
    let inputty = (input.value.toUpperCase());
    let ergebnis = "";
    morseAlphabet.map(ele => {
        for (let k = 0; k < inputty.length; k++) {
            if (ele.letter == inputty[k]) {
                ergebnis += ele.morseCode;
            }
        }
    }); console.log(ergebnis);
    output.innerHTML = ergebnis;
}

