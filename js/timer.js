import { Howl  } from './plugins/howler.js';

const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondsElement = document.querySelector('.milliseconds')

const startButton = document.querySelector('.start')
const fixingButton = document.querySelector('.fixing')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const results = document.querySelector('.results')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
fixingButton.addEventListener('click', () => {
    const block = document.createElement('div')
    counter++
    block.classList.add('result__info')
    block.innerText = `Result ${counter}: ${hour>9 ? hour : '0' + hour}:${minute>9 ? minute : '0' + minute}:${second>9 ? second : '0' + second}:${milliseconds>9 ? milliseconds : '0' + milliseconds}`
    results.append(block)
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})
stopButton.addEventListener('click', () =>  {
    clearInterval(interval)
    clearData()
    counter = 0
    results.textContent = ''
    disabledData()
})

let hour = 0,
    minute = 0,
    second = 0,
    milliseconds = 0,
    counter = 0,
    disabled = true,
    interval

function startTimer(){
    milliseconds++

    // milliseconds
    if (milliseconds < 9){
        millisecondsElement.innerText = '0' + milliseconds
    }
    if (milliseconds > 9){
        millisecondsElement.innerText = milliseconds
    }
    if(milliseconds > 99) {
        second++
        secondElement.innerText = '0' + second
        milliseconds = 0
        millisecondsElement.innerText = '0' + milliseconds
    }

    // second
    if (second < 9){
        secondElement.innerText = '0' + second
    }
    if (second > 9){
        secondElement.innerText = second
    }

    if(second > 59) {
        minute++
        minuteElement.innerText = '0' + second
        second = 0
        secondElement.innerText = '0' + minute
    }

    // minute
    if (minute < 9){
        minuteElement.innerText = '0' + minute
    }
    if (minute > 9){
        minuteElement.innerText = minute
    }
    if(minute > 59) {
        hour++
        hourElement.innerText = '0' + minute
        minute = 0
        minuteElement.innerText = '0' + minute
    }

    // hour
    if (hour < 9){
        hourElement.innerText = '0' + hour
    }
    if (hour > 9){
        hourElement.innerText = hour
    }
    if(hour > 24) {
        clearInterval(interval)
        clearData()
        alert('Больше суток не работаем')
    }
    activeSound(second)
    fixingButton.disabled = false
}

function clearData() {
    hour = 0
    minute = 0
    second = 0
    milliseconds = 0
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondsElement.textContent = '00'

}

function activeSound(el) {
    if (el % 10 === 0) {
        console.log(el);
        let sound = new Howl({
            src: ['sound.mp3']
        });

        sound.play();
    }
}

function disabledData() {
    if (disabled) {
        fixingButton.disabled = true
    }
}
disabledData()
activeSound(second)