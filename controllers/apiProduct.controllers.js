const { productModel, producerModel } = require('../models/mongo.schema')
const product = {
    home: async (req,res) =>{
        try{
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
    },
    searchProduct : async(req, res)=>{
        let findW = req.body.findword
        const regex = new RegExp(findW, 'i')  //i mayusculas y minusculas
        try{
            let data = await productModel.find( 
                {$or: 
                    [
                        {"producer.producerName": {$regex: regex}},
                        {title: {$regex: regex}}
                    ]
                })
            res.status(200).json(data)
        }catch(err){
            console.error(err)
        }
    }
}

module.exports = product;