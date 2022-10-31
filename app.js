// to do list :
// we want to create a mini game

// crete an random number 
// i want when the user click on 'play' , the program auto generate a range between to value, and then the use will
//to guess what is it..
let playButton = document.getElementById('playButton')


//here we are creating the random number function to create  the number to guess
let randomNumber = getRandomIntInclusive(1, 10);
let randomNumber2 = getRandomIntInclusive(1, 10);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};
// we use the button 'play' to run the function
playButton.addEventListener('click', start); 

function start () {
    document.getElementById('numbersRange').textContent = `vous devez trouvez une nombre compris entre ${randomNumber}
     et ${randomNumber2}`;
}
// we use the below function to get the user's answer
function getValueUser () {
    let answer = document.getElementById("input").value;
    if(answer === "10") {
        console.log('totot')
    }else{
        console.log('marche pas')
    }
}

// to do : problem to define the display of the div 'in'(l15 html). I can change any style and i cant see
// the style in the dev tools...

