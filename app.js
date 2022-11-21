
/* 
Crete an random number 
I want when the user click on 'play' , the program auto generate a range between two values, then the user will
have to guess what is it..
*/

//here we are creating the random number function to create  the number to guess
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};
//produit 1 lessive 8 euros
let randomNumber = getRandomIntInclusive(1, 3);//from
let randomNumber2 = getRandomIntInclusive(4, 7);//to
let numberToFind = getRandomIntInclusive(randomNumber, randomNumber2);//number the user need to guess,
//get the id button 'play' to display the range of numbers
//have to be between randomNumber & randomNumber2
const playButton = document.getElementById('playButton')


// we use the button 'play' to run the function which will diplay the range
playButton.addEventListener('click', start);
//this function display the range from the smaller to the bigger number...

function start () {
    document.getElementById('content').style.display = 'flex'
    document.getElementById('div-input').classList.remove('in')
    if (randomNumber < randomNumber2) {
        document.getElementById('numbersRange').textContent = `Veuillez devinez le prix de cet article..Sa valeur est comprise entre ${randomNumber}
        et ${randomNumber2}.`;
    } else if (randomNumber > randomNumber2) {
        document.getElementById('numbersRange').textContent = `Veuillez devinez le prix de cet article..Sa valeur est comprise entre ${randomNumber2}
        et ${randomNumber}.`
 }
}

//counter
const divelem = document.getElementById("counter")
TempsRestant = 0;
playButton.addEventListener('click', function(){
    setTimeout(function() {
        TempsRestant = 0;
        let compteur = setInterval(() => {
            let answer = document.getElementById("input").value;
            divelem.innerText = TempsRestant;
            TempsRestant++;
            if(answer == numberToFind) {
                clearInterval(compteur)
            }
        }, 1000);
    }, 5000)

});

// we use the below function to get the user's answer

function getValueUser () {
    let answer = document.getElementById("input").value;
    //display error message if user's choice is not into the random range
    if(answer < randomNumber){
        document.getElementById('numbersRange').textContent = ("Ce nombre n'est pas compris entre " + randomNumber + " et " +randomNumber2 + '.' +
        ' Veuillez écrire un chiffre plus grand que ' + randomNumber + '!')
    } else if(answer > randomNumber2) {
        document.getElementById('numbersRange').textContent = ("Ce nombre n'est pas compris entre " + randomNumber + " et " +randomNumber2 + '.' +
         ' Veuillez écrire un chiffre plus petit que ' + randomNumber2 + '!');
         //information to help user to find the correct number
    } else if(answer > numberToFind){
        document.getElementById('numbersRange').textContent = answer + " is too high! ";
    } else if(answer < numberToFind){
        document.getElementById('numbersRange').textContent = answer + " is too low! ";
    } else if(answer == numberToFind){
        document.getElementById('numbersRange').textContent = " You Win! The good number is " + numberToFind + "! " + "You find it in " + (TempsRestant - 1) + " second!";
        divelem.style.display = 'none'
        endGame();
    } else if (answer = String) {
    document.getElementById('numbersRange').textContent = " Ceci n'est pas un nombre! ";
}
}


