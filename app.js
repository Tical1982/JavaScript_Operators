console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;

let add = a + b; 
console.log("add = " + add);

let minus = a - b; 
console.log ("minus = " + minus);

let multiply = a * b; 
console.log ("multiply = " + multiply);

let dividing = a / b; 
console.log ("dividing = " + dividing);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

let numStr = num + str;
console.log("num + str = " + numStr);

let numStr2 = num + str2;
console.log("num + str2 =" + numStr2);

let numIsPresent = num + isPresent;
console.log("num + isPresent =" + numIsPresent);

let firstNameNum = firstName + num;
console.log("firstName + num =" + firstNameNum);

let isPresentstr = isPresent + str;
console.log("isPresent + str =" + isPresentstr);

let firstNamelastName = firstName + lastName;
console.log(" firstName + lastName =" + firstNamelastName);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

let valStr3 = val == str3;
console.log("val == str3 =" + valStr3);

let valStr = val === str3;
console.log ("val === str3 =" + valStr);

let isAwake1 = !isAwake;
console.log ("!isAwake =" + isAwake1);

let eleven = ("eleven" == str4 && val >= str3);
console.log ("eleven == str4 && val > = str3" + eleven);

let value = (!isAwake || isAwake);
console.log ("!isAwake || isAwake" + value);

let value2 = 0 == false;
console.log (" 0 == false?" + value);


let sun = 0 === false;
console.log (" 0 === false?" + sun);


let Peaches = 0 != false;
console.log (" 0 != false?" + Peaches);


let moon =  0 !== false;
console.log (" 0 !== false" + moon);