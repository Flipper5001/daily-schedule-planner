function createTimeBlock(hour){
    // create row element
    const row = $('<div>');
    row.attr('class', 'row time-block');
    
    // 3 columns (hour, tasks, save)
    // create and display hourly element 
    const hourCol = $('<div>');
    hourCol.attr('class', 'col-1 hour d-flex align-items-center justify-content-end');
    hourCol.text(moment(hour, 'H').format('h A'));
    
    // when i click on time block
    // you can type a small description of your task
    const taskCol = $('<textarea>');
    taskCol.attr('class', 'col-10');
    
    // time blocks need to be color coded depending on...    
    const currentHour = Number(moment().format('H'));
    // if past
    const isPast = hour < currentHour;
    if (isPast){
        taskCol.addClass('past');
    };
    // if present
    const isPresent = hour === currentHour;
    if (isPresent){
        taskCol.addClass('present');
    };
    // if future
    const isFuture = hour > currentHour;
    if (isFuture){
        taskCol.addClass('future');
    };
    
    // Save button
    const saveBtnCol = $('<button>');
    saveBtnCol.attr('class', 'col-1 saveBtn');
    const saveIcon = $('<i>');
    saveIcon.attr('class', 'fas fa-save');
    saveBtnCol.append(saveIcon);
    
    // when i click the save button
    // saves that specific row to local storage so if refreshed, it remains
    saveBtnCol.on("click", function(){
        const userInput = taskCol.val();
        localStorage.setItem(hour, userInput)
    });
    
    // when page loads gets values from local storage and places them in the correct time slots
    taskCol.val(localStorage.getItem(hour))

    // Append row with columns
    row.append(hourCol, taskCol, saveBtnCol);
    return row;
}

$(function(){
    
    // moment for current date
    const currentDate = $('#current-day');
    const dateToday = moment().format("dddd, Do MMMM");
    currentDate.text(dateToday);
    
    // set current time
    setInterval(function(){
            const currentTime = moment().format('hh:mm:ss A');
            $('#current-time').text(currentTime);
    }, 1000);
    
    const timeBlockContainer = $('.container');
    
    // for standard business hours 9am-5pm
    for (let hour = 9; hour < 18; hour++) {
        
        const timeBlock = createTimeBlock(hour);
        
        timeBlockContainer.append(timeBlock)  ; 
    }    
    
});





























