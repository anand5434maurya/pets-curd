const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const Mongodb = require('./models')

Mongodb.connect()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use('/pets', router);

app.listen(8000,()=>{
    console.log('Server is running on 8000')
})

