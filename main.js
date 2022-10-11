// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//-------------- Question 1 --------------//

function createUser(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user;

}

console.log(createUser('John', 'Doe'));
console.log(createUser('Mesi', 'Kaleziq'));



//------------------- Question 2 -------------------//

function setAge(userObject, age) {
    // add new age field to the user object
    userObject.age = age;
    return userObject;
}
console.log(setAge({ firstName: 'Tim', lastName: 'Horton' }, 50));


//------------------- Question 3 -------------------//

function incrementAge(userObject) {
    // increment the age field of the user object
    userObject.age++;
    return userObject;
}

console.log(incrementAge({ firstName: 'Tim', lastName: 'Horton', age: 50 }));

//------------------- Question 4 -------------------//

function fixCar(carObject) {
    // set the needsMaintenance field of the car object to false   
    carObject.needsMaintenance = false;
    return carObject;
}

console.log(fixCar({ make: 'Ford', model: 'Mustang', year: 1969, needsMaintenance: true }));

//------------------- Question 5 -------------------//

// // Accepts two parameters, a student object and an array of grades
// Adds each new grade to the student's grades array
// Returns the student object

const addGrades = (student, grades) => {
    student.grades.push(...grades);
    return student;
}



//------------------- Question 6 -------------------//


function getDataType(object, key) {
    return typeof object[key];
    
};
const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
}
getDataType(car, 'make') 
getDataType(car, 'model')
getDataType(car, 'year') === 'number';
getDataType(car, 'needsMaintenance') === 'boolean';


//------------------- Question 7 -------------------//

//Accepts two parameters, an array of to-do items and a new to-do item
//Adds the new-todo item to the array
//Returns the array of to-do items

const addTodo = (todos, newTodo) => {
    todos.push(newTodo);
    return todos;
}


//------------------- Question 8 -------------------//

// // Accepts two parameters, a playlist object and a song object
// Updates the duration of the playlist
// Adds the song to the playlist's songs
// Returns the playlist object

const addSong = (playlist, song) => {
    playlist.duration += song.duration;
    playlist.songs.push(song);
    return playlist;
}

//------------------- Question 9 -------------------//

// //Accepts two parameters, a report card and a new grade (a number between 0 and 100)
// Updates the report card's lowest grade, highest grade, and average grade
// Adds the new grade to the report card's grades

const updateReportCard = (reportCard, newGrade) => {
    reportCard.grades.push(newGrade);
    reportCard.lowestGrade = Math.min(...reportCard.grades);
    reportCard.highestGrade = Math.max(...reportCard.grades);
    reportCard.averageGrade = reportCard.grades.reduce((a, b) => a + b) / reportCard.grades.length;
    return reportCard;
}































// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
