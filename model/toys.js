const mongoose = require('mongoose')

const toysSchema = mongoose.Schema({
    toyname: {
        type: String,
        required: true,
        unique: true
    },
    prize: {
        type: Number,
        required: true,
    },
    discountedPrize: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    is_bestseller: {
        type: Boolean,
        default: 0
    },
    is_softToy: {
        type: Boolean,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Toys',toysSchema);