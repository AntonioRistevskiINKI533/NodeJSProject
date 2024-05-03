const { getItems, getItem, addItem, deleteItem, updateItem } = require('../controllers/items')

//Item schema
const Item = {
  type: 'object',
  properties: {
    id: {type: 'string'}, //if i comment one of these out the api call will not return it
    name: {type: 'string'} //if i change type, it will return it as such
  }
}

//Options for get all items
const getItemsOpts = {//VALIDATION, Determines what will be returned
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item
      }
    },
  },
  handler: getItems
}

//Options for get one
const getItemOpts = {
  schema: {
    response: {
      200: Item
    },
  },
  handler: getItem
}

//Options for post one
const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],//Make property required, if we dont send it we get bad request 400 error
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      201: Item
    },
  },
  handler: addItem
}

//Options for delete
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    },
  },
  handler: deleteItem
}

//Options for update one
const updateItemOpts = {
  schema: {
    response: {
      200: Item
    },
  },
  handler: updateItem
}

function itemRoutes (fastify, options, done) {

  fastify.get('/items', getItemsOpts);
  
  fastify.get('/items/:id', getItemOpts);

  fastify.post('/items', postItemOpts);

  fastify.delete('/items/:id', deleteItemOpts);

  fastify.put('/items/:id', updateItemOpts);

  done();
}

module.exports = itemRoutes;