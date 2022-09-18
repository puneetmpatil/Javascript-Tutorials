// Creating an Alarm App: Exercise 6
// console.log("This is tutorial 54");
/*
You have to create an alarm clock in javascript. (Use your creativity)
Allow use to set alarm for a certain time
*/

/*
function playAudio() {
    let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}
// setInterval(playAudio, 2000);

let btn = document.getElementById('setAlarm')
btn.addEventListener('click',function(e) {
    e.preventDefault();
    let userTime = document.getElementById('time').value;
    let regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
    if (userTime.match(regex)) {
        let valid = document.getElementById('invalid')
        valid.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        Your alarm was successfully set
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        let arr = userTime.split(':');
        const alarmTime = {
            'hours': arr[0],
            'minutes': arr[1]
        }
        setInterval(() => {
            let date = new Date();
            if (date.getHours() == alarmTime.hours && date.getMinutes() == alarmTime.minutes) {
                for(let i=0;i<10;i++){
                    playAudio()
                }
                clearInterval()            
            }

        },10000)
    }
    else{
        let invalid = document.getElementById('invalid')
        invalid.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Invalid time
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }

})
*/
console.log("This is Tutorial 54")

const alarmSubmit = document.getElementById('alarmSubmit')

// Add Event listener to the submit button
alarmSubmit.addEventListener('click',setAlarm)

// This function will run whenever alarm is set from UI
function setAlarm(e) {
    e.preventDefault(); 
    const alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate} ...`)
    let now = new Date();
    let timeToAlarm = alarmDate - now
    console.log(timeToAlarm)
    if (timeToAlarm >= 0){
      setTimeout(() => {
        console.log("Ringing now...")
        ringBell()
      },timeToAlarm)
  }
}
// Function to plat the alarm ringtone
function ringBell(){
  let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}
