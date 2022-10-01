const { Board, Piezo } = require("johnny-five");
const board = new Board();

/**
 * Piezo buzzers are a type of speaker. They can be used to play tones, or to play melodies.
 * 
 * Piezo buzzers don't care which direction the signal is going. They just care about the
 * frequency of the signal. The signal is a pulse width modulation (PWM) signal. The signal
 * is a square wave, which means that it is on for half of the time, and off for half of the
 * time. The frequency of the signal is the number of times that the signal is on and off
 * per second. The higher the frequency, the higher the pitch.
 * 
 * Johnny Five gives us a Piezo class that we can use to play tones. We can use the `play()`
 * method to play a tone. The `play()` method takes a series of notes, and plays them in
 * sequence. Each note is just a letter (A-G) and an optional number (1-8). The letter
 * represents the note, and the number represents the octave. The number is optional, and
 * defaults to 4. The letter can be lowercase or uppercase.
 */
board.on("ready", () => {
    const piezo = new Piezo(5);

    piezo.play({
        song: "C D E F G A B C B A G F E D C C D E F G A B C B A G F E D C C C - - C D E F G A B C B A G F E D C C D E F G A B C B A G F E D C C C C C C",
        beats: 1 / 4,
        tempo: 100
    });

}).on("error", err => {
    console.log(err);
})