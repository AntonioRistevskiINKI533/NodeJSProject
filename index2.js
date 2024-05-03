//Node has build it files system called FS

//const { readFile, readFileSync } = require('fs');//impot from fs module (fs- filesystem)

//SYNC === BLOCKING, BLOCKING means it needs to finish all its work in order for the other code to run


//1. Sync function

//const txt = readFileSync('./hello.txt', 'utf8')

//console.log(txt)

//console.log('do this ASAP')


//oh, hello file system
//do this ASAP

//2. Async function

//const txt = readFile('./hello.txt', 'utf8', (err, txt) => {
//    console.log(txt)
//});

//console.log('do this ASAP')

//Овде е обратно изврпувањето затоа што console.log() се извршива побрзо и readFile е nonBlocking a readFileSync е blocking
//do this ASAP
//oh, hello file system

//3. Promise based solution

const readFile = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
    console.log('do this ASAP')
}
console.log(file)
console.log('do this ASAP')