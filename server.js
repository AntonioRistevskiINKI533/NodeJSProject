//npm run dev - start project

const fastify = require('fastify')({ logger: true })
const helmet = require('@fastify/helmet');
const fastifyCors = require('@fastify/cors');
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to the database"))
.catch(e => console.log("Error connecting to database", e));

//fastify.register(require('fastify-swagger'), { - depricated
//  exposeRoute: true,
//  routePrefix: '/docs',
//  swagger: {
//    info: { title: 'fastify-api' },
//  },
//});

fastify.register(require('@fastify/swagger'));
fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/documentation'
});

fastify.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "http://localhost:*"],
      connectSrc: ["'self'", "http://localhost:*"], // Add 'connect-src' directive
      // Add other directives as needed
    },
  },
});

// Add hook to set CSP header for /documentation route
//astify.addHook('onRequest', (request, reply, done) => {
// if (request.url.startsWith('/documentation')) {
//   reply.header('Content-Security-Policy', "default-src 'self' http://localhost:*; connect-src 'self' http://localhost:*");
// }
// done();
//);

// Register @fastify/cors plugin
fastify.register(fastifyCors, {
  origin: '*', // Change as needed to allow specific origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

fastify.register(require('./routes/items'));
//fastify.register(require('./routes/items'), { prefix: 'auth' }) //So ova patekata kje bidi http://127.0.0.1:5000/auth/items/2

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch(error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start();