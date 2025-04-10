radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
ml.onStart(ml.event.Tick, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
})
ml.onStart(ml.event.No, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
radio.setGroup(131)
