const EventEmitter = require('events');
const ee = new EventEmitter();
ee.on('turtorial',()=>{
    console.log("This event has occured.");
});
ee.emit('turtorial');