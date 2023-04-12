const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/alien'
var port = process.env.port || (process.argv[2] || 9000);

port = (typeof port === "number") ? port : 9000;

const app= express()

mongoose.connect(url,{useNewUrlParser:true})
const con= mongoose.connection

con.on('open',function(){
    console.log("****** connected *****");
})

app.use(express.json())

const alienRouter = require('./routes/aliens')

app.use('/aliens',alienRouter)


if(require.main === module){
app.listen(port);
}

module.exports = app;
console.log('**** App is running at http://localhost:' +port)
