let dayOfWeek = "Monday";
console.log(dayOfWeek);

dayOfWeek = "Friday";
console.log(`I can’t wait for ${dayOfWeek}!`);


let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");

let animalPhrase = `I've never seen a ${colorInput} ${animalInput}!`;
console.log(animalPhrase);


let timeOfDay = 1300;
let meal;
switch (true) {
    case (timeOfDay < 1200):
        meal = "Frosted Flakes";
        break;
    case (timeOfDay <= 1700):
        meal = "Chicken and Waffles";
        break;
    case (timeOfDay > 1700):
        meal = "Duck Confit";
        break;
}
console.log(meal);


maxNum = 10;
minNum = 0;
let randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
console.log(randomNumber); 
switch(true){
    case randomNumber <= 2:
        console.log("Beatles")
        break;
    case randomNumber <= 5:
        console.log("Stones")
        break;
    case randomNumber <= 8:
        console.log("Floyd")
        break;
    case randomNumber <= 10:
        console.log("Hendrix")
        break;
};

let loop_edge = 7;
for(let i = 0; i < loop_edge; i++){
    console.log("Javascript is cool!");
}
loop_edge = 10;
for(let i = 0; i <= loop_edge; i++){
    console.log(i);
}
for(let i = 1; i <= loop_edge; i++){
    if(i%2===0){
        console.log("goodbye");
    }
    else{
        console.log("hello")
    }
}

function printMovieName(){
    nameOfFavoriteMovie = "Harry Potter";
    console.log(nameOfFavoriteMovie);
}
printMovieName();

function printFavoriteBandName(){
    let userInput = prompt("Please enter your favorite band name: ");
    return userInput;
}
let favoriteBandName = printFavoriteBandName();
console.log(favoriteBandName);

function concertDisplay(musicalAct){
    let myStreet = prompt("Please enter the street name where you reside: ");
    let result = `It would be great if ${musicalAct} played a show on ${myStreet}!`;
    return result;
}
let sampleResponse = concertDisplay(favoriteBandName);
console.log(sampleResponse);

let desktopItems = ['desk', 'lamp', 'printer'];
let desktopItemindexOne = desktopItems[1]; 
console.log(desktopItemindexOne);
desktopItems.push('Infinity Gauntlet');
lengthOfArray = desktopItems.length;
let i = 0;
while(i < lengthOfArray){
    console.log(desktopItems[i]);
    i++;
}

let minMagicNum = 0;
let maxMagicNum = 100;
let magicNumber = Math.floor(Math.random() * (maxMagicNum - minMagicNum) + minMagicNum);
let guess = 0;
while(guess!=magicNumber){
    guess = prompt("Please guess the magic number: ")
    let magicNumberUpperLimit = magicNumber + 10;
    let magicNumberLowerLimit = magicNumber -10;
    if(guess <= magicNumberUpperLimit && guess >= magicNumberLowerLimit){
        if(guess == magicNumber){
            console.log("You have guessed the magic number.");
            break;
        }
        else{
            console.log("Getting warmer");
        }
    }
    else{
        if(guess < magicNumber){
            console.log("Too low!");
        }
        else{
            console.log("Too high!");
        }
    }
}