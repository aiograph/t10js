//завдання 1:

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];
let count = 0;

function countItems(array, condition){
    count = 0;
    for(const i in array){ // for ... of (умова)
        if(condition(array[i])){
            count++;
        }
    }
        return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

//завдання 2:

const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b == 0 ? Error("НА НУЛЬ ДІЛИТИ НЕ МОЖНА") : a / b;

console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку

//завдання 3:

const arr1 = ["Vika", "Sasha", "Nazar", "Mash", "Walter", "Adolf", "Jesus", "Alex", "Andrew"];

const repeatMessage = function(time, callback){
    for(let i = 0; i < time; i++) { callback(i); };
};

const messageCreator = function(x){
    console.log(`Hi, ${arr1[x]}!`);
};

repeatMessage(1, messageCreator);
console.log("~~~~~~~~~~~~");
repeatMessage(5, messageCreator);
console.log("~~~~~~~~~~~~");
repeatMessage(9, messageCreator);

//завдання 4:

const arr = ["Astral", "ShowOfTrue-man", "Walking Dead", "WalkingBad", "Breaking Bad", "Terminator", "StarWars"];

const processMovies = function(movies, action){
    for(movie in movies){
        action(movies[movie], movie);
    };
}

const isScary = (mv, i) => i == "0" || i == "2" ? console.log(`${mv} is really scary movie!`) : null;
const isFanny = (mv, i) => i == "1" || i == "3" ? console.log(`${mv} is really funny movie!`) : null;
const isFantastic = (mv, i) => i == "5" || i == "6" ? console.log(`${mv} is really fantastic movie!`) : null;

processMovies(arr, isScary);
console.log("~~~~~~~~~~~~");
processMovies(arr, isFanny);
console.log("~~~~~~~~~~~~");
processMovies(arr, isFantastic);

// const profile = {
//     name: "Vlad",
//     city: "Lviv",
//     change(cng){
//         this.name = cng.name;
//         this.city = cng.city;
//     }
// }

// console.log(profile.name);
// console.log(profile.city);

// profile.change({
//     name: "Dima",
//     city: "Kyiv"
// });

// console.log(profile.name);
// console.log(profile.city);

// const profile = {
//     name: "Vlad",
//     city: "Lviv",
//     change(cng){
//         this.name = cng.name;
//         this.city = cng.city;
//     }
// }

// console.log(profile.name);
// console.log(profile.city);

// profile.change({
//     name: "Dima",
//     city: "Kyiv"
// });

// console.log(profile.name);
// console.log(profile.city);