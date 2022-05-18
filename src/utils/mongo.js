const mongoose = require('mongoose')
require('../models')

const mongo = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/flower')
    } catch (err) {
        console.log(err);
    }
}

module.exports = mongo