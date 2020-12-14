"use strict"

// Colours
const hexMorning = '#3ee5d2'
const hexAfternoon = '#c06de0'
const hexEvening = '#000138'

// DOM Elements
const backgroundImage = document.getElementById('background--image')
const backgroundFilter = document.getElementById('background--filter')
const quote = document.getElementById('quote')

// OS
const os = window.navigator.userAgent

const loop = () => {
    // Date values
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    if (os.includes('Windows')) quote.innerText = `Using Windows? Why? Switch to Linux!`
    else if (os.includes('Linux')) quote.innerText = `Linux rocks!`
    else if (os.includes('Mac')) quote.innerText = `You are using a Mac, interesting...`

    // This phrases are more important that the OS ones
    if (hours === 15) quote.innerText = `It is ${hours}:${minutes < 10 ? "0" + minutes : minutes}, let's go for a cup of tea!`
    else if (hours >= 1 && hours <= 3) quote.innerText = `It is ${hours}:${minutes < 10 ? "0" + minutes : minutes}, go to sleep!`

    // Filters and colour changing
    if (hours <= 5) {
        backgroundFilter.style.backgroundColor = hexEvening
        backgroundImage.style.filter = "saturate(0.3) brightness(0.3) contrast(1.5) blur(3px)"
    } else if (hours <= 12) {
        backgroundFilter.style.backgroundColor = hexMorning
        backgroundImage.style.filter = "saturate(0.8) brightness(1) contrast(1) blur(5px)"
    } else if (hours <= 19) {
        backgroundFilter.style.backgroundColor = hexAfternoon
        backgroundImage.style.filter = "saturate(0.8) brightness(1) contrast(1) blur(5px)"
    } else {
        backgroundFilter.style.backgroundColor = hexEvening
        backgroundImage.style.filter = "saturate(0.3) brightness(0.3) contrast(1.5) blur(3px)"
    }
}

loop()
setInterval(loop, 1000)