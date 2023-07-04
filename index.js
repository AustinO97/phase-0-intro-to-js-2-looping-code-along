// Code your solutions in this file

const names = ["Charlie", "Samip", "Ali"]

let messages = []

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return messages;
}



let num = 10;
function countDown(num) {
    while (num >= 0)
        console.log(num--);
}

console.log(num);