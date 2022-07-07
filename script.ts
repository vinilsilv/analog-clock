// Sets the clock each second
setInterval(setClock, 1000)

// Identifying the hands' elements
const hourHand = document.querySelector<HTMLDivElement>('[data-hour-hand]')
const minuteHand = document.querySelector<HTMLDivElement>('[data-minute-hand]')
const secondHand = document.querySelector<HTMLDivElement>('[data-second-hand]')
const timeDisplay = document.querySelector<HTMLParagraphElement>('.time-display')

// Sets the clock
function setClock() {
    const currentDate: Date = new Date()
    const secondsRatio: number = currentDate.getSeconds() / 60
    const minutesRatio: number = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio: number = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    displayTime()

}

// Function to set a value to the element's '--rotation' variable
function setRotation(element: HTMLDivElement, rotationRatio: number) {
    element.style.setProperty('--rotation', (rotationRatio * 360).toString())
}

function displayTime() {
    const time: Object | any = new Date()
    const display = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`
    timeDisplay.innerText = display
}

setClock()