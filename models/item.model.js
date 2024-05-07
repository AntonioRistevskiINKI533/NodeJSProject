const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    //_id: {
    //    type: String,
    //    required: true,
    //    trim: true
    //},
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;