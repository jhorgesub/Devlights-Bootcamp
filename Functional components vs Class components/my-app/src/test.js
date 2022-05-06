/*const falsy = 0;
const truthy = {};
if (falsy) {
    console.log("truthy value");
} else {
    console.log("falsy value");
}
console.log(false&&truthy);*/

const mycar = {
    color: "red",
    brand: "Toyota",
    wheels: 4,
    engine: {
        cylinders: 4,
        cv: 155
    },
    hello: () => {
        console.log("Hello");
    },
};

/*console.log(Object.keys(mycar));
console.log((Object.values(mycar)));
console.log(mycar.hasOwnProperty("color"));
console.log(mycar["brand"]);
console.log(mycar.brand);
mycar.hello();*/

//Array
/*const students = [
    {name: "Jorge", age: 38, language: "Java"},
    {name: "Hector", age: 39, language: "C+"},
    {name: "Manuel", age: 37, language: "Python"},
    {name: "Fran", age: 39, language: "Javascript"},
    
];*/

//console.log(students);

/*function filterAge (student,i) {
    //console.log(i);
    //console.log(student);
    return student.language == "Python"
}*/

//Con funcion Lambda
//console.log(students.filter((student) => student.language == "Python"));
//console.log(students.map(students => students.name));
//console.log(students.reduce((previo, actual) => previo + actual.age, 0));

//Desestructuración
//const languages = ["Java", "C", "Python"];
//const [first, second, ...rest] = languages;
//const {brand, color, ...rest} = mycar; 
//console.log({brand, color});
//console.log(rest);
//console.log(rest);

/*function makeAsync(fun) {
    return setTimeout(fun,1000)
}*/

function test() {
    console.log("test1");
    timeout(() => console.log("test2")).then(() => (console.log("fullfilled")));
    console.log("test3");
}

test();


function test() {
    console.log("test1");
    (() => console.log("test2"));
    console.log("test3");
}

test();

//promises
function timeout(fun) {
    return new Promise((resolve) => setTimeout(resolve(fun(),300)));
}