//Node. js is an open-source, cross-platform JavaScript runtime environment and library
//2009
//Allows running javascript on server not just in browser

//nvm
//npm -v
//C:\Users\Antonio\OneDrive\Desktop\NodeProject>
//node index.js //Со специфицирање име
//node . //по default стартова то што се вика index.js

console.log("Hello world");

console.log(global.luckyNum); //Печати undefined
//luckNum можи се да биди luckyLand да биди можи и ако сакаш CatLand да биди

global.luckyNum = "Hello world";

console.log(global.luckyNum); //Печати Hello world
//In JavaScript, global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

console.log(process.platform); // ова печати win32
//We use process platform to check hte current platform or operatin system
//Most important Global to be familiar with is PROCESS!

console.log(process.env.USER); //Enviroment variable -

//Node.js is Non blocking
//And Sutable for things that require hight thoutoutput like realtime applications, web servers...

//Learn how events and callbacks work
//In mostcases you must listen to events
//Before a Node process finishes it emits an event named exit!!!
process.on("exit", function () {
  // this function() is a call back function, we call this function after the exit event
  //do something
});

const { EventEmitter } = require("events"); //import EventEmitter from events Module - this module is build into node

const eventEmitter = new EventEmitter(); // create an event

eventEmitter.on("lunch", () => {
  // callback function that fires on the lunch event

  console.log("yum");
});

eventEmitter.emit("lunch");
eventEmitter.emit("lunch");
//Emit the event lunch, and so  yum will execute twice, usefull when you need something CPU intensive
