let jog2 = 0
let Jog1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Go!!")
    basic.pause(randint(1000, 5000))
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    jog2 += 1
    basic.showLeds(`
        # # # # #
        # . . # #
        . . # # .
        . # # . .
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    Jog1 += 1
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # .
        . . # # .
        . . # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
