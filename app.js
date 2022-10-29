function capitalize(inp) {
    return inp[0].toUpperCase() + inp.slice(1).toLowerCase()
}


function reverseString(word) {
    return word.split("").reverse().join("");
}


let calculator = {
    add: function (x,y) {
        return x + y
    },
    subtract: function (x,y) {
        return x - y
    },
    divide: function (x,y) {
        return x / y
    },
    multiply: function (x,y) {
        return x * y
    }

}

function caeserCipher(word) {
    let lettersString = "abcdefghijklmnopqrstuvwxyz";
    let letters = lettersString.split("")
    let cipherWord = [];
        word.split("").forEach((letter) => {
            if (letters.includes(letter)) {
                if (letters.indexOf(letter) === 25){
                    cipherWord.push(letters[0])
                } else {
                    cipherWord.push(letters[letters.indexOf(letter) + 1])
                }

            } else {
                cipherWord.push(letter);
            }
        })
    return cipherWord.join("")
}

function analyzeArray(numsArray) {
    numsArray.sort((a, b) => a-b)
    let total = numsArray.reduce((total, num) => {
        return total + Math.round(num);
    })
    return {
        average: total / numsArray.length,
        min: numsArray[0],
        max: numsArray[numsArray.length - 1],
        length: numsArray.length
    }
}

console.log(analyzeArray([5,7,20,2,8])
)


export {capitalize, reverseString, calculator, caeserCipher, analyzeArray}
