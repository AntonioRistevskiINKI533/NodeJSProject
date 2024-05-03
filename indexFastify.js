//Fastify has the advantage of speed

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true }) //Logger gives extra information in console

// Declare a route
fastify.get('/', function newHandlerFunction(request, reply) {

  reply.send({ hello: 'world' })
  
})

const students = [{
  id: 1,
  name: 'antonio',
  surname: 'ristevski'
}, 
{
  id: 2,
  name: 'rade',
  surname: 'stevanovski'
}];

fastify.get('/api/getOneStudent/:id', function newHandlerFunction(request, reply) {

  let student = students.find(x => x.id == request.params.id)

  reply.send(student)
  
})

fastify.get('/api/getAllStudents', function newHandlerFunction(request, reply) {

  reply.send(students)
  
})

// Run the server!
fastify.listen({ port: 3000 }, (err) => {

  if (err) {//If there is an error, log it and exit, end program
    fastify.log.error(err)
    process.exit(1)//Exit code 1 is used when unhandled fatal exceptions occur that were not handled whereas Exit code 0 is used to terminate when no more async operations are happening.
  }

})

//ВИДИ ШТО Е ИНДЕКСИРАЊЕ
//ПОВРЗИ swagger и mongodb
//Postman//Dali kje treba so SSO da se najavam???
//Docker

//The main difference between using a regular function and an arrow function as a route handler in Fastify (or in Node.js in general) lies in how they handle the this keyword and how they are defined within the JavaScript language. This difference typically doesn't have a significant impact on functionality or performance in the context of Fastify or similar frameworks.

//::1 is the compressed format IPV6 loopback address 0:0:0:0:0:0:0:1.

//More often than not, localhost and 127.0. 0.1 are used interchangeably. The two are considered the same thing.

// Во package.json "main": "index.js", од ова зависи што ќе се стартни кога ќе пишиме node .

//removed "test": "echo \"Error: no test specified\" && exit 1", from scipts in package json, it was default