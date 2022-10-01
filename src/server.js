const { Board, Button, Servo } = require("johnny-five");
const board = new Board();

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