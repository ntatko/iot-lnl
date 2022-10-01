const { Board } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
   // Your code here!
   
}).on("error", err => {
    console.log(err);
})