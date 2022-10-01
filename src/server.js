const { Board, Button, Led, Sensor, Servo } = require("johnny-five");
const board = new Board();

/**
 * This is a standard function, the default arduino program that always runs on a new board.
 * Plug in the board, run this program, and the built-in LED will blink.
 */
board.on("ready", () => {
    // Create a new `led` hardware instance.
    const led = new Led(13);
    led.blink(500);

    // Create a button, and do something when it's pressed.
    const button = new Button(3);
    const led2 = new Led(4);
    const led3 = new Led(5);

    led2.on();
    button.on("press", () => {
        led2.on();
        led3.off();
    })

    button.on("release", () => {
        led2.off();
        led3.on();
    })

    // Create a sensor, and do something when the value changes.
    const sensor = new Sensor("A4");
    const led4 = new Led(6);

    sensor.on("change", () => {
        if (sensor.value > 512) {
            led4.brightness(Math.round((sensor.value - 512) / 2) - 1);
        } else {
            led4.off();
        }
    })

}).on("error", err => {
    console.log(err);
})