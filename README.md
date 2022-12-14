# 1904Labs Internet-of-Things Lunch And Learn Series!

This repository contains the slides and code for the 1904Labs Internet-of-Things Lunch And Learn Series!

Get your lunch and learn on with 1904Labs!

### What is this?

This is a series of lunch and learn sessions that we will be hosting at 1904Labs. The goal is to get people together to learn about various topics in the Internet-of-Things space. We will be covering a wide range of topics, from hardware to software to cloud services. We will also be covering a wide range of skills, from the basics to the advanced.

### Who is this for?

This is for anyone who is interested in learning about DIY Internet-of-Things. We will be covering a wide range of topics, so there should be something for everyone.

### What do I need to bring?

You will need your computer. [NodeJS](https://nodejs.org/en/) will need to be installed. I will be using [VSCode](https://code.visualstudio.com/) as our editor, but you can use whatever you want.

Everything else will be provided.

## The Kits

<table>
    <tr>
        <td><img src="images/kits/breadboard.jpg" width="200" /></td>
        <td>Breadboard</td>
        <td>Keeps all the components in place</td>
    </tr>
    <tr>
        <td><img src="images/kits/arduino.jpg" width="200" /></td>
        <td>Arduino</td>
        <td>Our brains</td>
    </tr>
    <tr>
        <td><img src="images/kits/led-white.jpg" width="200" /></td>
        <td>White LED</td>
        <td>Our white light - needs a 51ohm resistor</td>
    </tr>
    <tr>
        <td><img src="images/kits/led-red.jpg" width="200" /></td>
        <td>Red LED</td>
        <td>Our red light - needs a 151ohm resistor</td>
    </tr>
    <tr>
        <td><img src="images/kits/led-green.jpg" width="200" /></td>
        <td>Green LED</td>
        <td>Our green light - needs a 151ohm resistor</td>
    </tr>
    <tr>
        <td><img src="images/kits/led-blue.jpg" width="200" /></td>
        <td>Blue LED</td>
        <td>Our blue light - needs a 51ohm resistor</td>
    </tr>
    <tr>
        <td><img src="images/kits/led-yellow.jpg" width="200" /></td>
        <td>Yellow LED</td>
        <td>Our blue light - needs a 151ohm resistor</td>
    </tr>
    <tr>
        <td><img src="images/kits/buttons.jpg" width="200" /></td>
        <td>Buttons</td>
        <td>Our buttons, momentary switches</td>
    </tr>
    <tr>
        <td><img src="images/kits/potentiometer.jpg" width="200" /></td>
        <td>Potentiometer</td>
        <td>A rotating sensor, used to detect rotation</td>
    </tr>
    <tr>
        <td><img src="images/kits/51ohm-resistors.jpg" width="200" /></td>
        <td>51 Ohm Resistors</td>
        <td>Resistors that we will use for blue and white LEDs</td>
    </tr>
    <tr>
        <td><img src="images/kits/151ohm-resistors.jpg" width="200" /></td>
        <td>151 Ohm Resistors</td>
        <td>Resistors that we will use for red, green, and yellow LEDs</td>
    </tr>
    <tr>
        <td><img src="images/kits/vibrating-motor.jpg" width="200" /></td>
        <td>Vibrating Motor</td>
        <td>Small DC motor used for making things vibrate</td>
    </tr>
    <tr>
        <td><img src="images/kits/usb-c-cable.jpg" width="200" /></td>
        <td>USB C cable</td>
        <td>The cable we'll use to connect our arduino to our computer</td>
    </tr>
    <tr>
        <td><img src="images/kits/servo.jpg" width="200" /></td>
        <td>Servo</td>
        <td>A 5v DC motor that is programmed to go to positions in degrees (1 - 180)</td>
    </tr>
    <tr>
        <td><img src="images/kits/piezo.jpg" width="200" /></td>
        <td>Piezo Buzzer</td>
        <td>A small speaker, used to play tones</td>
    </tr>
    <tr>
        <td><img src="images/kits/jumper-cable.jpg" width="200" /></td>
        <td>Jumper wires</td>
        <td>Wires used to connect different parts of the breadboard to one another</td>
    </tr>
    <tr>
        <td><img src="images/kits/dc-motor.jpg" width="200" /></td>
        <td>DC Motor</td>
        <td>A DC gear motor</td>
    </tr>
</table>

## Getting Started

### Prerequisites

You will need to have [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed. I will be using [VSCode](https://code.visualstudio.com/) as our editor, but you can use whatever you want.

### Installing

Clone the repository

```
git clone git@github.com:ntatko/iot-lnl.git
cd iot-lnl
```

Install the dependencies

```
npm install
```

Then, plug in your arduino using the provided USB cable. Make sure that the arduino is powered on (some lights will come on).

### Running

```
npm start
```

### Editing

Open the project in your editor of choice. I will be using [VSCode](https://code.visualstudio.com/). The file you will be editing is [`src/server.js`](/src/server.js). This runs whenever you run `npm start`.

### Slides

I have some slides, if you want to get a quick overview of what we're talking about.

[The slides](slides.pdf)

## Challenges

Below, you'll find a series of challenges, each with a different level of difficulty. You can work on them in any order you want. You can also skip around. The goal is to get you to learn about the different components and how they work together.

### 1: Is This Thing On?

In this lesson, your objective is to make the built-in LED on the arduino blink. You will be using the [Johnny-Five](http://johnny-five.io/) library to do this. The built-in LED on the arduino is connected to pin 13. 

![Blinking LED](images/diagrams/ex1-wiring.png)

*Cheat codes:* You can use the [blink](http://johnny-five.io/api/led/#blink) method to make the LED blink.

**Answer key:** [`ex1-it_works.js`](src/stages/ex1-it_works.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex1-it_works.js
```

### 2: Push the Button

In this lesson, you will learn how to read the state of a button, and how to use that to control an LED.

Objective: Turn one LED on when the button is pressed, and have the other LED turn off when the button is pressed. Have them reverse when the button is released.

![Wiring diagram with potentiometer](images/diagrams/ex2-wiring.png)

*Cheat codes:* You can use the [`on`](http://johnny-five.io/api/led/#on) method to turn the LED on, and the [`off`](http://johnny-five.io/api/led/#off) method to turn the LED off. [`toggle`](http://johnny-five.io/api/led/#toggle) might also be interesting.

**Answer key:** [`ex2-buttons_leds.js`](src/stages/ex2-buttons_leds.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex2-buttons_leds.js
```

### 3: Spin the Dial

In this lesson, you will learn how to read the state of a potentiometer, and how to use that to control an LED.

Objective: Make an LED's brightness change based on the position of the potentiometer. Use whatever scale you want, linear, logarithmic, etc. Go nuts!

![Wiring diagram with potentiometer](images/diagrams/ex3-wiring.png)

*Cheat codes:* You can use the [`brightness`](http://johnny-five.io/api/led/#brightness0255) method to set the brightness of the LED. The [`sensor`](http://johnny-five.io/api/sensor/) class is a good place to start using analog sensors. Be sure to use a pin that supports analog input - one preceded by an `'a'`.

**Answer key:** [`ex3-analog_pwm.js`](src/stages/ex3-analog_pwm.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex3-analog_pwm.js
```

### 4:  Make it Move

In this lesson, you will learn how to control a servo motor.

Objective: Make a servo motor move positions when a button is pressed.

![Wiring diagram with servo](images/diagrams/ex4-wiring.png)

*Cheat codes:* You can use the [`to`](http://johnny-five.io/api/servo/#to) method to move the servo to a specific position.

**Answer key:** [`ex4-servo.js`](src/stages/ex4-servo.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex4-servo.js
```

### 5: Sing Along

In this lesson, you will learn how to control a piezo buzzer.

Objective: Make a piezo buzzer play a song when the program is run.

![Wiring diagram with piezo](images/diagrams/ex5-wiring.png)

*Cheat codes:* Checkout the [`Piezo`](http://johnny-five.io/api/piezo/#tone) class for using these speakers.

**Answer key:** [`ex5-piezo.js`](src/stages/ex5-piezo.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex5-piezo.js
```

### 6: Where is the ISS?

In this lesson, we're going to blend our hardware with the internet. We're going to use the [Open Notify API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) to get the current location of the International Space Station, and then use that data to control a servo motor and a Piezo speaker.

Objective: Make a servo motor move to the current latitude of the ISS, and make a piezo buzzer play a tone whenever the ISS crosses the date line (when the longitude goes past 0, either from positive to negative, or negative to positive). 5 seconds should be a frequent enough interval.

![Wiring diagram with piezo and servo](images/diagrams/ex6-wiring.png)

*Cheat codes:* You don't get any this time. I like `node-fetch`, but you can use whatever you want.

**Answer key:** [`ex6-iss.js`](src/stages/ex6-iss.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex6-iss.js
```

### 7: An Exchange of Data

In this lesson, we're going to upload data to the internet. We're going to use an api that I made to store data from a potentiometer, then use that data to control a servo motor or an LED. I don't have a formal doc site written, but here you go:

* `GET /leds/:id` - Get the current state of an LED
* `GET /leds` - Get the current state of all LEDs
* `POST /leds/:id` - Set the state of a new LED - Needs a json body of the form `{ "value": 0 }`
* `PATCH /leds/:id` - Edit the state of a new LED - Needs a json body of the form `{ "value": 0 }`
* `PUT /leds/:id` - Like a post - Needs a json body of the form `{ "value": 0 }`

Objective: Choose a partner, and each of you will need to have a potentiometer and a servo motor. When you turn your potentiometer, their servo motor should move to the same position. When they turn their potentiometer, the other person's servo motor should move to the same position.

![Wiring diagram with potentiometer and servo](images/diagrams/ex7-wiring.png)

*Cheat codes:* You don't get any this time. Be inspired

**Answer key:** [`ex7-exchange.js`](src/stages/ex7-exchange.js)

Or, if you just want to see the answer key in action:

```
node src/stages/ex7-exchange.js
```
