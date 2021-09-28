const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


const launchDate = '2 Jan 2022';
function countDown(){
    const launchDateA = new Date(launchDate);
    const currentDate = new Date();

    const totalseconds = (launchDateA - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    
}
function formatTime(time){
    return time<10?(`0${time}`) : time;
}
countDown();
setInterval(countDown,1000)
