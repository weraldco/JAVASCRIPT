let millisec = 0;
let second = 0;
let minute = 0;
let hour = 0;
let html = '';
let start = false;
let startID;

let startBtn = document.querySelector('.js-start-btn');
let timeContainer = document.querySelector('.time-container');
let resetBtn = document.querySelector('.js-reset-btn');

startBtn.addEventListener('click', startWatch);
resetBtn.addEventListener('click',resetWatch);

showTime(0,0,0,0)



function showTime(hour,minute,second,millisec){

    html = `${hours(hour)}:${minutes(minute)}:${seconds(second)}:${milliSecond(millisec)}`

    timeContainer.innerHTML = html;
}

function startWatch() {
    if (!start) {

        startID = setInterval(()=>{
            millisec ++
            if (millisec === 100) {
                second ++
                millisec = 0
            }
            if (second === 60) {
                minute ++;
                second = 0
            }
            if(minute === 60) {
                hour ++;
                minute = 0
            }
           
            showTime(hour, minute, second, millisec)
            
        }, 10); 

        start = true
        startBtn.innerHTML = 'Pause'

    } else {
        clearInterval(startID)
        start = false
        startBtn.innerHTML = 'Start'
    }
}

function seconds(sec){
    if(sec <= 9) {
        return '0' + sec
    } else {
        return sec
    }
}

function minutes(min) {
    if(min <= 9) {
        return '0' + min
    } else {
        return min
    }
}
function hours(hr) {
    if(hr <= 9) {
        return '0' + hr
    } else {
        return min
    }
}

function milliSecond(msec) {
    if (msec <= 9) {
        return '00' + msec
    } else if (msec < 100) {
        return '0' + msec
    } else {
        return msec
    }
}
function resetWatch(){
    second = 0;
    minute = 0;
    hour = 0;
    millisec = 0;
    clearInterval(startID)
    startBtn.innerHTML = 'Start'
    start = false

    showTime(hour, minute, second, millisec)
   
}
