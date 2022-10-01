const { Board, Led } = require("johnny-five");
const board = new Board();

/**
 * This is a standard function, the default arduino program that always runs on a new board.
 * Plug in the board, run this program, and the built-in LED will blink.
 */
board.on("ready", () => {
    // Create a new `led` hardware instance.
    const led = new Led(13);
    led.blink(500);

}).on("error", err => {
    console.log(err);
})