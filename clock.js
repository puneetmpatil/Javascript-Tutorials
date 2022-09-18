console.log("This is tutorial 62")
console.log("This is clock.js")

function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hour,minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minute/second is less than 10 (Single digit)  
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;
    
    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12) ? 'AM' : 'PM'

    // Convert Railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour-12: currentHour;
    currentHour = (currentHour == 0 ) ? 12 : currentHour;

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = `${currentHour}:${currentMinutes}:${currentSeconds} ${timeOfDay}`
    
    // Insert the time string inside the DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
}
setInterval(updateClock,1000)