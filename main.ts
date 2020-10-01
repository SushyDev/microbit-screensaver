basic.forever(function () {
    control.setInterval(function () {
        led.toggle(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5))
    }, 500, control.IntervalMode.Interval)	
})