const mongoose = require('mongoose')

const Schema = mongoose.Schema
const PetsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    colour: {
        type: String,
        required: true
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    },
    timestamps: true
})

module.exports = mongoose.model('Pets', PetsSchema)