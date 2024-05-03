//fastify
//fastify-swagger
//uuid
//npm i -D nodemon --On the other hand, `npm i -D` is a variation of `npm install` with the `-D` flag, where `-D` stands for `--save-dev`. This flag is used to install packages as development dependencies
//npm run dev - start project
//nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

const fastify = require('fastify')({ logger: true })

//fastify.register(require('fastify-swagger'), { - depricated
//  exposeRoute: true,
//  routePrefix: '/docs',
//  swagger: {
//    info: { title: 'fastify-api' },
//  },
//});

fastify.register(require('@fastify/swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'code', description: 'Code related end-points' }
    ],
    definitions: {
      User: {
        type: 'object',
        required: ['id', 'email'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: {type: 'string', format: 'email' }
        }
      }
    },
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header'
      }
    }
  }
})

fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
  transformSpecificationClone: true
})

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