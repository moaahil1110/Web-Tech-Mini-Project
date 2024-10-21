const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to \'MongoDB\' successfully");
})
mongoose.connection.on('error',(err)=>{
    console.log("err connnecting",err);
})
app.listen(PORT, () => {
    console.log("Server is running on port",PORT);
})