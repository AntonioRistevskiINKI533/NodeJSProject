const { v4:uuidv4 } = require('uuid')
let items = require('../items')

const getItems = (req, reply) => {
    reply.send(items);
}

const getItem = (req, reply) => {
    const {id} = req.params;
  
    const item = items.find((item) => item.id === id);
  
    reply.send(item);
}

const addItem = (req, reply) => {
    const {name} = req.body;
    const item = {
        id: uuidv4(),
        name
    }

    items = [...items, item];

    reply.code(201).send(item);//The 201 Created status code means that the request was successfully fulfilled and resulted in one or possibly multiple new resources being created
}

const deleteItem = (req, reply) => {
    const {id} = req.params;
    
    items = items.filter(item => item.id !== id);

    reply.send({message: 'Item ${id} has been removed'})
}

const updateItem = (req, reply) => {
    const {id} = req.params;
    const {name} = req.body;

    items = items.map(item => (item.id === id ? {id, name}
    : item));
    
    item = items.find((item) => item.id === id);

    //item.name = name; // also works

    reply.send(item);
}

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
}