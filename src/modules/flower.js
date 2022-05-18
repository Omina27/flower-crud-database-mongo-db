const flowerModel = require('../models/flower.model')

module.exports = {
    GET: async(_, res) => {
        try {
            res.send(await flowerModel.find())
        } catch (err) {
            console.log(err);
        }
    },

    POST: (req, res) => {
        try {
            const newFlower = new flowerModel(req?.body)
            newFlower.validate(async err => {
                if (err?.errors["flower_name", "flower_price"]?.message) {
                   return res.json(err?.errors["flower_name", "flower_price"]?.message)  
                }
                await newFlower.save()
                res.json(await flowerModel.find())
            })
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },

 

    PUT: async(req, res) => {
        const { id } = req.params
        const { flower_name, flower_price } = req.body

        flowerModel.findByIdAndUpdate(id, { flower_name, flower_price }, (err, doc) =>{
            if (err) throw err
            res.json(doc)
        })
    },

    DELETE: async(req, res) => {
        const { id } = req.params
    
        flowerModel.findByIdAndDelete(id, (err, doc) => {
            if(err) throw err
    
            if(doc == null) {
                return res.json("There is no flower like this")
            }
    
            res.json(doc)
        })
    }
}