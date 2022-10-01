const { Board, Button, Led } = require("johnny-five");
const board = new Board();

/**
 * This is our first take on sensor data. We're going to use a button to turn on and off an LED.
 * 
 * A button is a digital sensor. It has two states: on or off. When the button is pressed, it's on.
 * When the button is released, it's off. The button is connected to a digital pin on the arduino,
 * and the arduino is connected to the computer. The computer is reading the state of the button
 * by reading the digital pin.
 * 
 * We're going to use the `Button` class from the johnny-five library to read the state of the button.
 * 
 * The `Button` class has two events: `press` and `release`. We're going to use these events to turn
 * on and off the LED.
 * 
 * We're doing something a little different with our button. We're using a pull-up resistor. Generally,
 * when a button is pressed, the circuit is completed, the power flows from the power, through the
 * button, then into the sensor. When the button is released, the circuit is broken, and the power
 * stops flowing. However, when we use a pull-up resistor, the power flows out of the sensor, and the
 * pull-up resistor senses when the circuit has been grounded.
 */
board.on("ready", () => {
    // Health check - blink the built-in LED.
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

}).on("error", err => {
    console.log(err);
})