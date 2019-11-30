const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const background = document.querySelector('.rotatingbg');

function setTime(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    //  replacement of seconds to degrees
    const secDegrees = (seconds * 360) / 60;
    //replacement of minutes to degrees
    const minDegrees = (minute * 360) / 60 + secDegrees/60 ;
    //replacement of hour to degrees
    const hourDegrees = (hour * 360) / 12 + minDegrees/12;

    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    background.style.transform = `rotate(${secDegrees}deg)`;
    background.parentNode.style.opacity = 1;
};
// setTime();
setInterval(setTime,1000);


