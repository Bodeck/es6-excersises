'use strict';
//zadanie1
const stringA = 'Hello';
const stringB = 'World!';
const stringFinal = `${stringA} ${stringB}`;
//zadanie2
const multiply = (num1, num2 = 1) => num1 * num2;
//zadanie3
const average = (...args) => {
  const sum = args.reduce((total, curr) => {
    return total += curr;
  })
  return sum / args.length
}
//zadanie4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const averGrade = average(...grades);
//zadanie5
const inputArray = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = inputArray;

//Kata - zadanie1
function buildString(...template) {
  return `I like ${template.join(', ')}!`;
}
//Kata - zadanie2
function shuffleIt(arr, ...param) {
  param.forEach(([index1, index2]) => {
    let index2Value = arr[index2];  
    arr[index2] = arr[index1];
    arr[index1] = index2Value;
  })
  return arr
}
//Kata zadanie3
function Sum(arr) {
  return arr.reduce((acc, curr)=> acc + curr);
} 

//Kata zadanie4
function spread(func, args) {
  return func(...args)
}