const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXWZ';
const lowerChar = 'abcdefghijklmnopqrstuvwxwz';
const symbols = '!\"$%&/()=?@~`\\.\';:+=^*_-"';
const numbers = '0123456789';

let output = document.getElementById("output");

function randomValue(value){
    return Math.floor(Math.random()*value);
}

function genPassword(){
    let length = document.getElementById('length').value;
    document.getElementById("length-val").textContent = length;
    let str = '';
    let finalString = '';

    if (document.getElementById("numbers").checked){
        finalString += numbers
    } 
    if (document.getElementById("lowercase-char").checked){
        finalString += lowerChar
    }
    if(document.getElementById("uppercase-char").checked){
        finalString += upperChar
    }
    if(document.getElementById("symbols").checked){
        finalString += symbols
    }

    for(let i=0; i<length; i++){
        let random = randomValue(finalString.length);
        str += finalString.charAt(random);
    }

    output.value = str;

    if (str === ''){
        alert("Check at least 1 checkbox")
    }
}

function copyClipboard(){
    output.select();
    document.execCommand('copy');
}