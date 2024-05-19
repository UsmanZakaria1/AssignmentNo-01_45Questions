console.log('Q1====================================\nInstallation');
//Q1 installation
/***************************************/
console.log('Q2 ====================================');
// Q2 Personal Message 
let msg: string = "Usman";
console.log(`Hello ${msg}, would you like to learn some TypeScript today?`);

/***************************************/
console.log('Q3 ====================================');
// Q3 Name Cases
msg = "Usman zakaria";
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(msg.replace(/\b\w/g, char => char.toUpperCase()));
console.log('Q4 ====================================');
/***************************************/
// Q4 Famous Quote 2
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);
console.log('Q5 ====================================');
/***************************************/
// Q5 Famous Quote 2
famous_person = "Albert Einstein";
message = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);
console.log('Q6 ====================================');
/***************************************/
// Q6 Stripping Names
msg = "\tUsman\n";
console.log(`Original: '${msg}'`);
console.log(`Stripped: '${msg.trim()}'`);
console.log('Q7 ====================================');
/***************************************/
// Q7 Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log('Q8 ====================================');

/***************************************/
// Q8 Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log('Q9 ====================================');
/***************************************/
// Q9 Favorite Number
let favorite_number: number = 7;
message = `My favorite number is ${favorite_number}.`;
console.log(message);
console.log('Q10 ====================================');

/***************************************/
// Q10 Adding Comments
// Usman
// This program prints a name in different cases.
msg = "usman";
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(msg.replace(/\b\w/g, char => char.toUpperCase()));

// Number Eight
// This program prints the number 8 using different operations.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

console.log('Q11 ====================================');
/***************************************/
// Q11 Names
let names: string[] = ["Ali", "haider", "humna"];
names.forEach(names => console.log(names));
console.log('Q12 ====================================');
/***************************************/
// Q12 Greetings
names.forEach(names => console.log(`Hello ${names}, how are you?`));
console.log('Q13 ====================================');
/***************************************/
// Q13 Your Own Array
let transportations: string[] = ["Tesla Model S", "BMW X5", "Honda Civic"];
transportations.forEach(car => console.log(`I would like to own a ${car}.`));

console.log('Q14 ====================================');
/***************************************/
// Q14  Guest List
let guests= ["ALI", "Haider", "Usman"];
guests.forEach(guests => console.log(`Dear ${guests}, you are invited to dinner.`));

console.log('Q15 ====================================');
/***************************************/
// Q15 Changing Guest List
guests = ["Usman", "Ali", "Maria"];
console.log(`${guests[1]} can't make it to the dinner.`);
guests[1] = "haider";
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log('Q16 ====================================');

/***************************************/
// Q16 More Guests
guests = ["Usman", "haider", "Maria"];
console.log("We found a bigger dinner table!");
guests.unshift("Human");
guests.splice(2, 0, "Huma");
guests.push("Amna");
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log('Q17 ====================================');
/***************************************/
// Q17 Shrinking Guest List
guests = ["Usman", "Ali", "Humna", "amna", "haider", "zakaria"];
console.log("I can invite only two people for dinner.");
while (guests.length > 2) {
    let removed_guest = guests.pop();
    console.log(`Sorry ${removed_guest}, I can't invite you to dinner.`);
}
guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));
guests = [];
console.log(guests);
console.log('Q18 ====================================');

/***************************************/
// Q18 Seeing the World
let places: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Cape Town"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order after sorted:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order after reverse sorted:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order after reverse:", places);
places.sort();
console.log("Alphabetical order after sort:", places);
places.reverse();
console.log("Reverse alphabetical order after sort:", places);
console.log('Q19 ====================================');
/***************************************/
// Q19 Dinner Guests Count
guests = ["Ali", "Humna", "Maria"];
console.log(`I am inviting ${guests.length} people to dinner.`);
console.log('Q20 ====================================');
/***************************************/
// Q20 List of Items
let rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi"];
rivers.forEach(river => console.log(river));
console.log('Q21 ====================================');
/***************************************/
// Q21 TypeScript Object
interface Car {
    manufacturer: string;
    model: string;
    year: number;
    color: string;
}

const car: Car = {
    manufacturer: "Tesla",
    model: "Model S",
    year: 2020,
    color: "red"
};

console.log(car);

console.log('Q22 ====================================');
/***************************************/
// Q22 Intentional Error
names = ["Alice", "Bob", "Charlie"];
// Intentionally causing an index error
// console.log(names[3]);  // This will cause an IndexError
// Correcting the error
console.log(names[2]);
console.log('Q23 ====================================');
/***************************************/
// Q23 // Conditional Tests
let cars: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');

console.log("Is car == 'audi'? I predict False.");
console.log(cars == 'audi');

let fruit: string = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

let age: number = 20;
console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age < 18? I predict False.");
console.log(age < 18);

console.log("Is age >= 20? I predict True.");
console.log(age >= 20);

console.log("Is age <= 20? I predict True.");
console.log(age <= 20);

console.log("Is age == 20? I predict True.");
console.log(age == 20);

console.log("Is age != 20? I predict False.");
console.log(age != 20);

console.log('Q24 ====================================');
/***************************************/
// Q24 More Conditional Tests
// Tests for equality and inequality with strings
 cars = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');

console.log("Is car == 'audi'? I predict False.");
console.log(cars == 'audi');

// Tests using the lower case function
fruit = 'Apple';
console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');

console.log("Is fruit.toLowerCase() == 'Apple'? I predict False.");
console.log(fruit.toLowerCase() == 'Apple');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
age = 20;
console.log("Is age == 20? I predict True.");
console.log(age == 20);

console.log("Is age != 21? I predict True.");
console.log(age != 21);

console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age < 21? I predict True.");
console.log(age < 21);

console.log("Is age >= 20? I predict True.");
console.log(age >= 20);

console.log("Is age <= 19? I predict False.");
console.log(age <= 19);

// Tests using "and" and "or" operators
let isTall: boolean = true;
let isSmart: boolean = false;
console.log("Is tall and smart? I predict False.");
console.log(isTall && isSmart);

console.log("Is tall or smart? I predict True.");
console.log(isTall || isSmart);

// Test whether an item is in a array
let items: string[] = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in the array? I predict", items.indexOf('banana') !== -1);

console.log("Is 'grape' in the array? I predict", items.indexOf('grape') !== -1);

console.log("Is 'grape' not in the array? I predict", items.indexOf('grape') === -1);

console.log("Is 'apple' not in the array? I predict", items.indexOf('apple') === -1);

console.log('Q25 ====================================');
/***************************************/
// Q25 Alien Colors #1
let alien_color: string = 'green';

// Version that passes the if test
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}

// Version that fails the if test
alien_color = 'red';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}
console.log('Q26 ====================================');
/***************************************/
// Q26 Alien Colors #2
alien_color = 'green';

// Version that runs the if block
if (alien_color === 'green') {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points!");
}

// Version that runs the else block
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points!");
}
console.log('Q27 ====================================');
/***************************************/
// Q27  Alien Colors #3
// Version for green alien
alien_color = 'green';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
} else if (alien_color === 'yellow') {
    console.log("You just earned 10 points!");
} else if (alien_color === 'red') {
    console.log("You just earned 15 points!");
}

// Version for yellow alien
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
} else if (alien_color === 'yellow') {
    console.log("You just earned 10 points!");
} else if (alien_color === 'red') {
    console.log("You just earned 15 points!");
}

// Version for red alien
alien_color = 'red';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
} else if (alien_color === 'yellow') {
    console.log("You just earned 10 points!");
} else if (alien_color === 'red') {
    console.log("You just earned 15 points!");
}
console.log('Q28 ====================================');
/***************************************/
// Q28  Stages of Life
 age = 25;

if (age < 2) {
    console.log("You are a baby.");
} else if (age >= 2 && age < 4) {
    console.log("You are a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("You are a kid.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("You are an adult.");
} else if (age >= 65) {
    console.log("You are an elder.");
}
console.log('Q29 ====================================');
/***************************************/
// Q29 Favorite Fruit
let favorite_fruits: string[] = ['banana', 'apple', 'orange'];

for (const fruit of favorite_fruits) {
    if (fruit === 'banana') {
        console.log("You really like bananas!");
    }
    if (fruit === 'apple') {
        console.log("You really like apples!");
    }
    if (fruit === 'orange') {
        console.log("You really like oranges!");
    }
    if (fruit === 'strawberry') {
        console.log("You really like strawberries!");
    }
    if (fruit === 'grape') {
        console.log("You really like grapes!");
    }
}
console.log('Q30 ====================================');
/***************************************/
// Q30 Hello Admin
let usernames: string[] = ['admin', 'alice', 'bob', 'charlie', 'dave'];

usernames.forEach(username => {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
console.log('Q31 ====================================');
/***************************************/
// Q31 No Users
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

usernames.forEach(username => {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
console.log('Q32 ====================================');
/***************************************/
// Q32 Checking Usernames
let current_users: string[] = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
let new_users: string[] = ['bob', 'david', 'frank', 'George'];

for (let new_user of new_users) {
    let user_exists = false;

    for (let user of current_users) {
        if (user.toLowerCase() === new_user.toLowerCase()) {
            user_exists = true;
            break;
        }
    }

    if (user_exists) {
        console.log(`The username ${new_user} is already taken, please choose a different one.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}
console.log('Q33 ====================================');
/***************************************/
// Q33  Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
});
console.log('Q34 ====================================');
/***************************************/
// Q34 Pizzas
let pizzas: string[] = ['pepperoni', 'margherita', 'bbq chicken'];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});

console.log("I really love pizza!");
console.log('Q35 ====================================');
/***************************************/
// Q35 Animals
let animals: string[] = ['dog', 'cat', 'rabbit'];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});

console.log("Any of these animals would make a great pet!");
console.log('Q36 ====================================');
/***************************************/
// Q36  T-Shirt
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message on it is '${message}'.`);
}

make_shirt('L', 'I love TypeScript');
console.log('Q37 ====================================');
/***************************************/
// Q37  Large Shirts
function make_shirts(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message on it is '${message}'.`);
}

make_shirts();
make_shirts('M');
make_shirts('S', 'TypeScript is awesome!');
console.log('Q38 ====================================');
/***************************************/
// Q38  Cities
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

console.log('Q39 ====================================');
/***************************************/
// Q39 
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with at least three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Sydney", "Australia"));
console.log('Q40 ====================================');
/***************************************/
// Q40 Album
function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album('Artist1', 'Album1'));
console.log(make_album('Artist2', 'Album2', 10));
console.log(make_album('Artist3', 'Album3'));


console.log('Q41 ====================================');
/***************************************/
// Q41  Magicians
let magicians: string[] = ['David Copperfield', 'Penn Jillette', 'Teller'];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

show_magicians(magicians);
console.log('Q42 ====================================');
/***************************************/
// Q42 Great Magicians
magicians = ['David Copperfield', 'Penn Jillette', 'Teller'];

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `The Great ${magician}`);
}

let great_magicians = make_great([...magicians]);
show_magicians(great_magicians);
show_magicians(magicians);
console.log('Q43 ====================================');
/***************************************/
// Q43 Unchanged Magicians
magicians = ['David Copperfield', 'Penn Jillette', 'Teller'];

great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
console.log('Q44 ====================================');
/***************************************/
// Q44  Sandwiches
function make_sandwich(...items: string[]): void {
    console.log("Sandwich with the following items:");
    items.forEach(item => console.log(item));
    console.log("Your sandwich is ready!\n");
}

make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'tomato', 'mayo');
make_sandwich('peanut butter', 'jelly');
console.log('Q45 ====================================');
/***************************************/
// Q45 Cars
function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]) {
    let car: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };
    options.forEach(option => {
        for (let key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    });
    return car;
}

console.log(create_car('Tesla', 'Model S', { color: 'red', autopilot: true }));
console.log(create_car('BMW', 'X5', { color: 'black' }, { package: 'sport' }));

