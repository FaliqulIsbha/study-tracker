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

function updateSubjectProgress(progress, percentageElement, progressBar){
    percentageElement.textContent = progress + "% completed";
    progressBar.style.width = progress + "%";
}

const myName = "Faliqul Isbha";
let studyHours = 2;
let dailyCompleted = false;
let unassignedNotes;
let empty = null;
const dailyTarget = 5;
const dsaHours = 3;
const javaHours = 4;

updateProgressMessage(studyHours, dailyTarget);



let assignmentCompleted = true;
// let progress = (studyHours/dailyTarget) * 100;
let goalCompleted = (studyHours >= dailyTarget);
let readyForToday = (goalCompleted && assignmentCompleted);

let progress = calculateProgress(studyHours,dailyTarget);

const dsaProgress = calculateProgress(dsaHours, dailyTarget);

const javaProgress = calculateProgress(javaHours, dailyTarget);



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

const javaPercentageElement = document.getElementById("java-percentage");
const javaProgressBar = document.querySelector(".java-width");



// dsaPercentageElement.textContent = (dsaProgress) + "% completed";
// dsaProgressBar.style.width = dsaProgress + "%";


updateSubjectProgress(dsaProgress, dsaPercentageElement, dsaProgressBar);

updateSubjectProgress(javaProgress, javaPercentageElement, javaProgressBar);

// ARRAYS

const subjectHours = [1, 1, 1, 1, 1];
// console.log(subjectHours);
// console.log(subjectHours.length);
// subjectHours[1] = 6;
// subjectHours.push(1);
// console.log(subjectHours);

const subjects = ["DBMS", "DSA", "OS", "CN", "Java"];



// for...of loop loop
for(const hours of subjectHours){
    console.log(calculateProgress(hours, dailyTarget) + "%");
}

for(let i =0;i<subjectHours.length;i++){
    console.log(subjects[i] + " : " + calculateProgress(subjectHours[i], dailyTarget) + "%");
}

//updating bar and percentage

for(let i =0;i<subjectHours.length;i++){
    const pro = calculateProgress(subjectHours[i], dailyTarget);
    const bar = document.querySelector("." + subjects[i].toLowerCase() + "-width");
    const percentage = document.getElementById(subjects[i].toLowerCase() + "-percentage");

    updateSubjectProgress(pro, percentage, bar);
}

const check = document.getElementById("automata-percenntage")
console.log(check);



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





