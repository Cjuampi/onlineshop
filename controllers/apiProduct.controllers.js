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
        let findW = req.params.word
        /* console.log(req.params.word) */
        const regex = new RegExp(findW, 'i')  //i mayusculas y minusculas
        try{
            let data = await productModel.find( 
                {$or: 
                    [
                        {producerName: {$regex: regex}},
                        {title: {$regex: regex}}
                    ]
                })
            res.status(200).json(data)
        }catch(err){
            console.error(err)
        }
    },
    getProduct : async(req, res)=>{
        let findId = req.params.id
        console.log(findId)
        try{
            let data = await productModel.find({idProduct: findId})
            res.status(200).json(data)
        }catch(err){
            console.error(err)
        }
    }
}

module.exports = product;