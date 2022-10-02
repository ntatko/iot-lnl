const { Board, Piezo, Servo } = require("johnny-five");
const fetch = require("node-fetch");
const board = new Board();

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