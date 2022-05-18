const express = require('express')
const app = express()
const PORT = 7000
const mongo = require('./utils/mongo')
const router = require('./modules')

const server = async() => {
    try {
        app.use(express.json())
        await mongo()
        app.use(router)
    } finally {
        app.listen(PORT, console.log(PORT))
    }
}

server()