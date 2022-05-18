const { Schema, model } = require('mongoose')

const flowerSchema = new Schema({
    flower_name: {
        type: String,
        lowercase: true,
        minlength: [ 5, "5 dan ko'proq harf bolishi kerak" ],
        maxlength: [ 15, "15 dan kamroq harf kiriting" ],
        required: true
    },
    flower_price: {
        type: Number,
        max: [500, "Maximum price is 500"],
        min: [20, "minimum price is 20"],
        required: true
    }

}, {
    collection: 'flowers',
    timestamps: true
})

const flowerModel = new model("Flowers", flowerSchema)
module.exports = flowerModel