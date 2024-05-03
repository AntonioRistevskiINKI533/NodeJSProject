//Modules

//common js  with require() (CJS)
//or
//ES modules with import/export (ESM)

//ECMAScript modules are the official standard format to package JavaScript code for reuse.

const newModule = require('./new-module');

console.log(newModule);

//npm init -y
//creates package.json - we use -y flag for default options

//npm i express

//The "package-lock. json" file in npm simply serves as a lockfile that captures the exact versions of packages and their dependencies. It ensures that the same versions of packages are used across different installations or environments.

const express = require('express');
const fs = require('fs');

const app = express(); //create app

app.get('/', (req, res) => {//path and callback function

    fs.readFile('./someHtml.html', 'utf8', (err, html) => {//read html file

        if (err) {//Error handling
            res.status(500).send('Out of order')
        }

        res.send(html)//send html file as response
    })

})

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))//start the app and if the app starts we will console log this