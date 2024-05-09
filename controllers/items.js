const { v4:uuidv4 } = require('uuid');
//let items = require('../items');
const Item = require('../models/item.model');

const getItems = async (req, reply) => {
    const items = await Item.find();
    reply.send(items);
}

const getItem = async (req, reply) => {
    const {id} = req.params;

    const item = await Item.findById(id);

    //const item = items.find((item) => item.id === id);

    reply.send(item);
}

const addItem = async (req, reply) => {
    const {name} = req.body;
    const {surname} = req.body;
    const newItem = {
        _id: uuidv4(),
        name,
        surname
    };

    const item = new Item(newItem);

    const result = await item.save();

    //items = [...items, item];

    reply.code(201).send(item);
}

const deleteItem = async (req, reply) => {
    const {id} = req.params;

    await Item.findByIdAndDelete(id);

    //items = items.filter(item => item.id !== id);

    reply.send({message: 'Item ${id} has been removed'})
}

const updateItem = async (req, reply) => {
    const {id} = req.params;
    const {name} = req.body;
    const {surname} = req.body;

    const updateItem = {
        _id: id,
        name,
        surname
    };

    const item = await Item.findByIdAndUpdate(id, updateItem, {
        new: true,
    });

    //items = items.map(item => (item.id === id ? {id, name, surname}
    //: item));
    
    //item = items.find((item) => item.id === id);

    reply.send(updateItem);
}

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
}