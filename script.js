console.log("Hello, Student Study Tracker");
// console.log(typeof null);
// console.log(typeof undefined);


function updateProgressMessage(studyHours, dailyTarget){
        const message = document.getElementById("progress-message");
        if(studyHours >= dailyTarget){
            message.textContent = "Goal completed!";
        }
        else if(studyHours > 0){
             message.textContent = "Keep going!";
        }
        else{
            message.textContent = "You haven't started yet!";
        }
}

function calculateProgress(studyHours, dailyTarget){
    return (studyHours / dailyTarget) * 100;
}

const myName = "Faliqul Isbha";
let studyHours = 2;
let dailyCompleted = false;
let unassignedNotes;
let empty = null;
const dailyTarget = 5;
const dsaHours = 2;

updateProgressMessage(studyHours, dailyTarget);


let assignmentCompleted = true;
// let progress = (studyHours/dailyTarget) * 100;
let goalCompleted = (studyHours >= dailyTarget);
let readyForToday = (goalCompleted && assignmentCompleted);

let progress = calculateProgress(studyHours,dailyTarget);

const dsaProgress = calculateProgress(dsaHours, dailyTarget);

console.log("Progress: " + progress + "%");
console.log("Goal Completed: " + goalCompleted);
console.log("Ready for Today: " + readyForToday);



const studyTimeElement = document.getElementById("study-time");
const percentageElement = document.getElementById("completion-percentage");

percentageElement.textContent = progress + "% completed";
studyTimeElement.textContent = (studyHours) + "/" + dailyTarget + " hours studied";


const progressBar = document.getElementById("progress-fill");
progressBar.style.width = progress + "%";

const dsaProgressBar = document.querySelector(".dsa-width");


const dsaPercentageElement = document.getElementById("dsa-percentage");

dsaPercentageElement.textContent = (dsaProgress) + "% completed";
dsaProgressBar.style.width = dsaProgress + "%";



// if(studyHours >= dailyTarget){
//     if(assignmentCompleted === true){
//     message.textContent ="Excellent! Your day is complete!"
//     }
//     else{
//        message.textContent = "Study goal done, but assignment is pending!";
//     }
// }
// else{
//    message.textContent ="Keep studying!" ;
// }





