const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModelSchema = new Schema({
    idProduct:{
        type:Number,
        require:true,
        unique:true
    },
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true,
    },
    relevance:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    producer :{
        producerName:{
            type:String,
            require:true
        }
    }
})

const producerModelSchema = new Schema({
    cif:{
        type:String,
        require:true,
        unique:true
    },
    producerName:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})

const productModel = mongoose.model('products',productModelSchema)
const producerModel = mongoose.model('producers',producerModelSchema)

module.exports = {
    productModel,
    producerModel
}