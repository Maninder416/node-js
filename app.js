const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/alien'
const port = 9000;

const app= express()

mongoose.connect(url,{useNewUrlParser:true})
const con= mongoose.connection

con.on('open',function(){
    console.log("****** connected *****");
})

app.use(express.json())

const alienRouter = require('./routes/aliens')

app.use('/aliens',alienRouter)

module.exports = app.listen(port, ()=>{
    console.log('**** App is running at http://localhost:' +port)
})