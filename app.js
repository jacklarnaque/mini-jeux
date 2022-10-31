// to do list :
// we want to create a mini game

// crete an random number 
// i want when the user click on 'play' , the program auto generate a range between two values, then the user will
// have to guess what is it..
 let playButton = document.getElementById('playButton')


//here we are creating the random number function to create  the number to guess
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let randomNumber = getRandomIntInclusive(1, 3);
let randomNumber2 = getRandomIntInclusive(4, 7);
let randomNumber3 = getRandomIntInclusive(randomNumber, randomNumber2);
 

// we use the button 'play' to run the function
playButton.addEventListener('click', start); 

function start () {
    let answer = document.getElementById("input").value;
    if (answer < randomNumber2) {
        document.getElementById('numbersRange').textContent = `Veuillez devinez le prix de cet aricle..Sa valeur est comprise entre ${randomNumber}
        et ${randomNumber2}.`;
    } else if (randomNumber > randomNumber2) {
        document.getElementById('numbersRange').textContent = `Veuillez devinez le prix de cet aricle..Sa valeur est comprise entre ${randomNumber2}
        et ${randomNumber}.`
 }
}

// we use the below function to get the user's answer
// bug si l'ont met un numéros qui n'est pas dans le range logger
function getValueUser () {
    let answer = document.getElementById("input").value;
    if(answer < randomNumber && answer > randomNumber2){
        console.error("Ce nombre n'est pas compris entre " + randomNumber + " et " +randomNumber2 + '.');
    // } else if(answer > randomNumber2) {
    //     console.error("Ce nombre n'est pas compris entre " + randomNumber + " et " +randomNumber2 + '.' +
    //     ' Veuillez écrire un chiffre plus petit que ' + randomNumber2);
    } else if(answer > randomNumber3){
        document.getElementById('numbersRange').textContent = answer + "Too high! ";
    } else if(answer < randomNumber3){
        document.getElementById('numbersRange').textContent = answer + "Too low! ";
    }
}


// to do :
// problem to define the display of the div 'in'(l15 html). I can change any style and i cant see
// the style in the dev tools...

//!!!<----------PRIORITY!!!--------->
// I need to create a random number which the value have to be between randomNumber et randomNumber2
//!!!<----------PRIORITY!!!--------->
