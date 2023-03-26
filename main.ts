radio.onReceivedNumber(function (receivedNumber) {
    nummer = receivedNumber
    basic.showNumber(nummer)
    basic.pause(100)
    basic.clearScreen()
    nummer = 0
})
input.onButtonPressed(Button.A, function () {
    if (project == 1) {
        radio.sendNumber(1)
    }
    if (project == 2) {
        radio.sendNumber(0)
        basic.showNumber(1)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (project == 1) {
        radio.sendNumber(3)
    }
    if (project == 2) {
        radio.sendNumber(3)
    }
})
input.onButtonPressed(Button.B, function () {
    if (project == 1) {
        radio.sendNumber(2)
    }
    if (project == 2) {
        radio.sendNumber(1)
        basic.showNumber(6)
        basic.pause(100)
        basic.clearScreen()
    }
})
let nummer = 0
let project = 0
radio.setGroup(10)
radio.setTransmitPower(7)
project = 0
let tijd = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && project == 0 && tijd == 0) {
        tijd = 1
        basic.showNumber(1)
        basic.pause(100)
        basic.clearScreen()
        project = 1
    }
    if (input.buttonIsPressed(Button.B) && project == 0 && tijd == 0) {
        tijd = 1
        basic.showNumber(2)
        basic.pause(100)
        basic.clearScreen()
        project = 2
    }
})
