const EventEmitter = require("events");
const event = new EventEmitter();

event.on("name", ()=>{
    console.log("My name is Maninder");
})

event.on("name", ()=>{
    console.log("Second event");
})

event.on("name", (sc, msg)=>{
    console.log("Third event");
    console.log(`Status code is: ${sc} and the page is: ${msg} `)
})

event.emit("name",200, "OK");