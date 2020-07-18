function convertToInteger (str) {
    return parseInt (str)
}

console.log (convertToInteger("56"))


function convertToInteger2 (str) {
    return parseInt (str, 2)
}

console.log (convertToInteger2("10011")) // como passar de binário pra decimal.

// ternary, em vez de if e else
function checkEqual (a, b) {
    return a === b ? true : false;
}

console.log(checkEqual(4, 6))

// ternary2, mais coisas, primeira coisa dps do "?" é true, depois false ou começa outra condição
function checkSign (num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log (checkSign(-20))

//filter e map
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squaredIntegers
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)

//destructuring
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
} 
function getTempOfTmrw(avgTemperatures) {
    const { tomorrow : tempOfTomorrow} = avgTemperatures; // "pega o campo 'tomorrow' do objeto 'avgTemperatures' e atribua à variável 'tempOfTomorrow'"
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

/* exemplo mais complexo:
mesma coisa, só que tomorrow: {min: 73.3, max: 84.6}
aí pra fazer o destructuring ficaria:
const { tomorrow : { max : maxOfTomorrow }} = blabla */

//mais exemplo de outras paradas
const createPerson = (name, age, gender) => ( {name, age, gender} );
console.log(createPerson("Juaj", 23, "male"));x