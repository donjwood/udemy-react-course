// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 24;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

// let person: {
//   name: string,
//   age: number;
// };

person = { name: "Max", age: 32 };

// person = {
//   isEmployee: true
// }

let people: Person[];

// let people: {
//   name: string;
//   age: number;
// }[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions & types

function addTs(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
