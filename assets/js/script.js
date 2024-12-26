/*jshint esversion: 6 */
//DOMContentLoad waiting for DOM to load before starting the game 
//(https://dev.to/obere4u/domcontentloaded-vs-windowonload-9mc, love maths walkthrough)
document.addEventListener('DOMContentLoaded', function () {
    initiateGame();
});
//Global variables
const wordDisplay = document.querySelector("#current");
const houseImage = document.querySelector("#housecontainer img");
const trackAttempts = document.querySelector("#attempts");
const input = document.querySelector("#answerinput");
let guessesList = [];
let wordArray = [];
let currentWord, attemptsCount;
const maxAttempts = 6;
//Initial game setting
function initiateGame() {
    attemptsCount=0;
    guessesList=[];
    getRandomWord();
    displayWord();
    houseImage.src = "assets/images/houses/house_0.png";

}
//get random word from external js file wordlist
function getRandomWord(){
    const { word, hint } = bibleWordList[Math.floor(Math.random() * bibleWordList.length)];
    currentWord = word;
    document.querySelector("#hints").innerText = hint;
}
function displayWord(){
    //create blanks for the searched word
    for (let i = 0; i < currentWord.length; i++) {
        wordArray += "_ ";
        wordDisplay.innerHTML = wordArray;
    }
}
