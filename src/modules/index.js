const express = require('express')
const router = express.Router()

const flowerModule = require('./flower')

router
    .get('/', flowerModule.GET)
    .post('/', flowerModule.POST)
    .put('/:id', flowerModule.PUT)
    .delete('/:id', flowerModule.DELETE)

module.exports = router