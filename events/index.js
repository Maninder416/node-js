const EventEmitter = require("events");
const event = new EventEmitter();

event.on("name", ()=>{
    console.log("My name is Maninder");
})

event.on("name", ()=>{
    console.log("Second event");
})

event.emit("name");