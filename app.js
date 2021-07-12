require('dotenv').config()
require('./database/mongo.conx')
const express = require('express');
const app = express();
const router = require('./routes/routes')
const PORT = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})