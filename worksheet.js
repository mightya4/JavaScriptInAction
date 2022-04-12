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
