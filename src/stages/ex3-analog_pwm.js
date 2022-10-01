const { Board, Led, Sensor } = require("johnny-five");
const board = new Board();

/**
 * This is the first introduction to analog sensors and PWM power - we're going to use a
 * potentiometer to control the brightness of an LED.
 * 
 * Analog sensors give read values that literally change the amount of power being allowed
 * through the sensor. This is different from digital sensors, which only have two states: on or off.
 * However, the digital device doing the reading of the analog value will interpret the analog
 * value as a number between 0 and 1023. The analog value is being read as a voltage, and the voltage
 * is being converted to a number.
 * 
 * PWM power is a way of controlling the amount of power being sent to a device. It's a way of
 * controlling the brightness of an LED or the speed of a motor. PWM (Pulse Width Modulation) is a way
 * of sending a signal to a device that is on or off, but with a variable amount of time in between
 * the on and off states.
 * 
 * A dim LED will use a cycle consisting of a short ON pulse, followed by a long OFF pulse. A bright
 * LED will use a cycle consisting of a long ON pulse, followed by a short OFF pulse. The longer the
 * ON pulse, the brighter the LED. The longer the OFF pulse, the dimmer the LED. The logic is the same
 * for a motor - the longer the ON pulse, the faster the motor.
 * 
 * PWM accepts values between 0 and 255. 0 is off, 255 is on, and 128 is half power. Since the analog
 * value is being read as a number between 0 and 1023, we need to convert it to a number between 0 and
 * 255. We can do this by dividing the analog value by 4.
 */
board.on("ready", () => {
    // Health check - blink the built-in LED.
    const led = new Led(13);
    led.blink(500);

    // Create a sensor (a potentiometer), and do something when the value changes.
    const potentiometer = new Sensor("A4");
    const led4 = new Led(6);

    potentiometer.on("change", () => {
        // simple mode
        // led4.brightness(Math.round(potentiometer.value / 4));

        // advanced mode
        // stays off for 1/2 of the time, then adjusts brightness for the other 1/2 of the time
        if (potentiometer.value > 512) {
            led4.brightness(Math.round((potentiometer.value - 512) / 2) - 1);
        } else {
            led4.off();
        }
    })

}).on("error", err => {
    console.log(err);
})