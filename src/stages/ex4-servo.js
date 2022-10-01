const { Board, Button, Servo } = require("johnny-five");
const board = new Board();

/**
 * Servo motors are motors that can be controlled by a signal. They have a range of motion, and
 * the signal controls the position of the motor. The signal is a pulse width modulation (PWM) signal.
 * 
 * The servo motor has three wires: red, black, and white (roughly). The red wire is the power wire, and it
 * should be connected to the 5V pin on the Arduino. The black wire is the ground wire, and it should
 * be connected to the GND pin on the Arduino. The white wire is the signal wire, and it should be
 * connected to a PWM pin on the Arduino.
 * 
 * Most servo motors have a range of motion of 0 to 180 degrees. However, some have a range of 0 to 360
 * degrees. The servo motor will move to the position that corresponds to the pulse width of the signal.
 * Johnny-Five uses a range of 0 to 180 degrees, so we'll use that.
 */
board.on("ready", () => {
    const button = new Button(3);
    const servo = new Servo(4);
    const positions = [0, 45, 90, 135, 180];
    let positionIndex = 0;

    button.on("press", () => {
        positionIndex = (positionIndex + 1) % positions.length;
        servo.to(positions[positionIndex]);
    });
   
}).on("error", err => {
    console.log(err);
})