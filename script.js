console.log("Hello, Student Study Tracker");
// console.log(typeof null);
// console.log(typeof undefined);

const myName = "Faliqul Isbha";
let studyHours = 3;
let dailyCompleted = false;
let unassignedNotes;
let empty = null;
const dailyTarget = 5;


// console.log(typeof name);
// console.log(typeof studyHours);
// console.log(typeof dailyCompleted);
// console.log(typeof unassignedNotes);
// console.log(typeof empty);

let assignmentCompleted = true;
let progress = (studyHours/dailyTarget) * 100;
let goalCompleted = (studyHours >= dailyTarget);
let readyForToday = (goalCompleted && assignmentCompleted);

console.log("Progress: " + progress + "%");
console.log("Goal Completed: " + goalCompleted);
console.log("Ready for Today: " + readyForToday);