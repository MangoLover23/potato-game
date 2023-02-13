input.onGesture(Gesture.Shake, function () {
    if (toestand == 1) {
        stel = 2
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendNumber(aardappel)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "einde") {
        if (toestand == 2) {
            toestand = 4
            basic.showIcon(IconNames.Happy)
        }
    }
})
let stel = 0
let aardappel = 0
let toestand = 0
radio.setGroup(1)
basic.showIcon(IconNames.Target)
toestand = 1
aardappel = randint(30, 60)
let timerEindtijd = input.runningTime() + 300
basic.forever(function () {
    if (toestand == 1) {
    	
    }
})
