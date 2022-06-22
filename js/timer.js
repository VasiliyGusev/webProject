import { Howl } from 'howler';

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
    sfx.start.play()
})
fixingButton.addEventListener('click', () => {
    const block = document.createElement('div')
    counter++
    block.classList.add('result__info')
    block.innerText = `Result ${counter}: ${hour>9 ? hour : '0' + hour}:${minute>9 ? minute : '0' + minute}:${second>9 ? second : '0' + second}:${milliseconds>9 ? milliseconds : '0' + milliseconds}`
    results.append(block)
    activeSound()
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
    sfx.pause.play()
})
stopButton.addEventListener('click', () =>  {
    clearInterval(interval)
    clearData()
    counter = 0
    results.textContent = ''
    disabledData()
    sfx.stop.play()
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
    if (milliseconds === 99) {
        sfx.second.play()
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
    fixingButton.disabled = false
    pauseButton.disabled = false
    stopButton.disabled = false
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

function activeSound() {
    if (fixingButton.disabled === false) {
        let sound = new Howl({
            src: ['https://assets.codepen.io/21542/howler-push.mp3'],
            volume: 0.2
        });
        sound.play();
    }
}
const sfx = {
    start: new Howl({
        src: ['https://zvukogram.com/index.php?r=site/download&id=77971'],
        html5: true,
        format: ['mp3'],
        volume: 0.5
    }),
    pause: new Howl({
        src: ['https://zvukogram.com/index.php?r=site/download&id=77968'],
        html5: true,
        format: ['mp3'],
        volume: 0.5
    }),
    stop: new Howl({
        src: ['https://zvukogram.com/index.php?r=site/download&id=35726'],
        html5: true,
        format: ['mp3'],
        volume: 0.2
    }),
    second: new Howl({
        src: ['https://zvukogram.com/index.php?r=site/download&id=77979'],
        html5: true,
        format: ['mp3'],
        volume: 0.2
    })
}

function disabledData() {
    if (disabled) {
        fixingButton.disabled = true
        pauseButton.disabled = true
        stopButton.disabled = true
    }
}
disabledData()