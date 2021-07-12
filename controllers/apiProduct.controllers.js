const { productModel, producerModel } = require('../models/mongo.schema')
const product = {
    home: async (req,res) =>{
        /* res.status(200).json('asdfgh') */
        try{
            /* let data = await producerModel.find({}) */
            let data = await productModel.find({})
            res.status(200).json(data)
        }catch(err){
            console.error(err)
        }
    },
    getProducers: async (req,res) =>{
        try{
            let data = await producerModel.find({})
            res.status(200).json(data)
        }catch(err){
            console.error(err)
        }
    }
}

module.exports = product;