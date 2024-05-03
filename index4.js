//Use promisses instead of callbacks to avoid CALLBACK HELL, a state where you have a bunch of callbacks nested inside of other callbacks and so on

const express = require('express');
const fs = require('fs').promises;

const app = express(); //create app

app.get('/', async (req, res) => {//path and callback function

    res.send( await fs.readFile('./someHtml.html', 'utf8'));

})

app.get('/api/getFirstStudent', async (req, res) => {//path and callback function

    res.send({
        id: 1,
        name: 'antonio',
        surname: 'ristevski'
    });

})

app.get('/api/getStudentById/:id', async (req, res) => {//path and callback function

    console.log(req.params)

    const studnets = [{
        id: 1,
        name: 'antonio',
        surname: 'ristevski'
    }, 
    {
        id: 2,
        name: 'rade',
        surname: 'stevanovski'
    }];

    let student = studnets.find(x => x.id == req.params.id)

    res.send(student);
})

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))