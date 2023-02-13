let stel = 0
input.onGesture(Gesture.Shake, function () {
    stel = 2
})
basic.forever(function () {
    basic.showLeds(`
        # # . . .
        . # # . .
        . # . . .
        . # . . .
        . . . . .
        `)
})
