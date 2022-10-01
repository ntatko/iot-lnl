const { Board } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
    // Do your stuff here.

}).on("error", err => {
    console.log(err);
})