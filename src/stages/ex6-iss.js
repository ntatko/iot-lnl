const { Board, Piezo, Servo } = require("johnny-five");
const fetch = require("node-fetch");
const board = new Board();

/**
 * The International Space Station (ISS) is a space station that orbits the Earth. It is
 * a joint project between the United States, Russia, Canada, and several other countries.
 * 
 * The ISS has a lot of sensors on it, and it sends data back to Earth. We're going to
 * use the ISS API to get the current location of the ISS, and then use the servo to
 * point the ISS in the direction of the ISS.
 * 
 * The ISS API is a REST API. It has a single endpoint, and it returns a JSON object.
 * 
 * We're going to use the `node-fetch` library to make a request to the API, and the `Servo`
 * class from the johnny-five library to control the servo.
 */
board.on("ready", () => {
    const piezo = new Piezo(4);
    const servo = new Servo(5);

    let prevLon = null;

    setInterval(() => {
        fetch("http://api.open-notify.org/iss-now.json").then(r => r.json()).then(data => {
            const { latitude, longitude } = data.iss_position;
            const lat = parseFloat(latitude);
            const lon = parseFloat(longitude);

            servo.to(lat + 90);

            if (prevLon !== null) {
                if ((prevLon > 0 && lon < 0) || (prevLon < 0 && lon > 0)) {
                    piezo.play({
                        song: "C D E E E E",
                        beats: 1 / 4,
                        tempo: 100
                    });
                }
            }
            prevLon = lon;
        })
    }, 5000);
   
}).on("error", err => {
    console.log(err);
});