// Sets the clock each second
setInterval(setClock, 1000);
// Identifying the hands' elements
var hourHand = document.querySelector('[data-hour-hand]');
var minuteHand = document.querySelector('[data-minute-hand]');
var secondHand = document.querySelector('[data-second-hand]');
var timeDisplay = document.querySelector('.time-display');
// Sets the clock
function setClock() {
    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds() / 60;
    var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
    displayTime();
}
// Function to set a value to the element's '--rotation' variable
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', (rotationRatio * 360).toString());
}
function displayTime() {
    var time = new Date();
    var display = "".concat(time.getHours().toString().padStart(2, '0'), ":").concat(time.getMinutes().toString().padStart(2, '0'));
    timeDisplay.innerText = display;
}
setClock();
//# sourceMappingURL=script.js.map