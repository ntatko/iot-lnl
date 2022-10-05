const { Board, Sensor, Servo } = require("johnny-five");
const fetch = require("node-fetch");
const board = new Board();


/**
 * This example uses your own id to both read and write. Really, I'd like you to exchange ids with
 * someone else in the class. You can use the id that is on your bag, but anything will work.
 * 
 * The first thing we're going to do is send our sensor data to the server. We're going to use the
 * `Sensor` class from the johnny-five library to read the sensor data. We're going to use the `fetch`
 * library to send the data to the server.
 * 
 * The second thing we're going to do is read the sensor data from the server. We're going to use the
 * `fetch` library to get the data from the server, and then we're going to use the `Servo` class from
 * the johnny-five library to move the servo.
 */
board.on("ready", () => {
    const sensor = new Sensor("A3");
    const servo = new Servo(4);

    const id = Math.round(Math.random() * 1000);

    sensor.on("change", () => {
        fetch(`https://lnl.zipidy.org/leds/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: sensor.value
            })
        });
    });

    setInterval(() => {
        fetch(`https://lnl.zipidy.org/leds/${id}`).then(r => r.json()).then(data => {
            servo.to(data.value/4);
        });
    }, 500);
   
}).on("error", err => {
    console.log(err);
});