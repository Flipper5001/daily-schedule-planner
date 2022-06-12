// moment for current date
const currentDate = $('#currentDay');
const now = moment().format("dddd, Do MMMM");
currentDate.text(now);

const currentTime = moment().format('HH')

// time blocks need to be color coded, blue displaying current time, gray for past, green for future
// when i click on time block
// you can type a small description of your task
const timeBlock = $('.task');


$(function(){
    // if statement, if currenttime is less than then set to future, if == set top present
    // for loop
    
})

// when i click the save button
// saves that specific row to local storage so if refreshed, it remains

// event listener - lg correct time in row
// when page loads gets values from local storage and place them in the correct places

























// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist