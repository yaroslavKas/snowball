
"use strict";
const EventEmitter = require("events");
// Охотник и Заяц.


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Rabbit extends EventEmitter {
	constructor(random1, random2) {
		super();
		this._state = {
			random1: null,
			random2: null,
		}
	}
	
	randomNumber() {
		
		this._state.random1 = getRandomInt(1, 20);
		this._state.random2 = getRandomInt(1, 20);

	}
	
	listener() {
		let x,y;
		
		this.randomNumber() 
		
		const {
			random1,
			random2
		} = this._state;
		
		
		
		console.log("listener", random1);
		console.log("listener", random2);
		
		if(random1 !== x && random2 !== y) {
			x = random1,
			y = random2
			
			console.log(x);
			console.log(y);
		
			this.emit("coordinate", `${random1} ${random2}`);
		}
	}
}

const hunter = new Rabbit();
hunter.on("coordinate", (data) => console.log(`this is coordinate Rabbit, ${data}`));
hunter.listener();
