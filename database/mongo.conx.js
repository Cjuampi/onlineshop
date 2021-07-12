require("dotenv").config();
const mongose = require('mongoose');
const password = process.env.mongoPassword;
const mongoDB = process.env.mongoDB;
const cnxServer = process.env.onlineShopDB;

mongose.connect(cnxServer,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log(`Mongo DataBase ${cnxServer} connected`))
.catch((err) => console.error(err))