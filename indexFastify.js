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

//For fastify.decorate in projects: The decorators API allows customization of the core Fastify objects, such as the server instance itself and any request and reply objects used during the HTTP request lifecycle. The decorators API can be used to attach any type of property to the core objects, e.g. functions, plain objects, or native types.

//sudo systemctl restart mongod - when mongo wont connect

//No, JavaScript does not directly support static type annotations like let age: number = 30; because JavaScript itself is a dynamically typed language. In JavaScript, variables are not explicitly declared with a specific type at compile time; instead, their types are determined dynamically at runtime based on the assigned values.
//Javascript: let age = 30; dynamicly typed
//Typescript: let age: number = 30; statically typed
//In statically typed languages, the compiler catches type-related errors before the program runs leading to more reliable code. On the other hand, dynamically typed languages detect type issues at runtime, which might lead to unexpected type errors or behavior during execution.

//The combination of these elements serves different purposes:
//
//Type Annotation (<{ Params: GetByIdType; Reply: CustomerItemResponseType; }>):
//Ensures type safety within the route handler function itself.
//Helps developers understand what kind of objects the handler expects and returns.
//
//Schema Definitions (params and response within schema):
//Provides validation for incoming request parameters (params) based on the defined schema.
//Describes the structure of the response (response) for documentation and validation purposes.

//When a client sends an HTTP request with an "Accept-Encoding" header specifying compression methods it supports (e.g., gzip, deflate, brotli), the @fastify/compress plugin automatically compresses the response payload using one of the supported compression algorithms. This reduces the size of the response data transferred over the network, leading to faster transmission and reduced bandwidth usage.