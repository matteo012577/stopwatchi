let START = 0
let verstreken = 0
input.onButtonPressed(Button.A, function () {
    START = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    verstreken = input.runningTime() - START
    basic.showNumber(Math.idiv(verstreken, 1000))
})
