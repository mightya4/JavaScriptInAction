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