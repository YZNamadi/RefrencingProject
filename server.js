const express = require('express');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const mongoose = require ('mongoose');
const router = require('./router/schoolrouter')
const  studentRouter = require('./router/studentrouter')


const app = express()
app.use(express.json())
app.use(router)
app.use(studentRouter)

mongoose
.connect(DATABASE_URL)
.then(()=>{

    console.log("Database connected")
    
    app.listen(PORT,()=>{
        console.log(`Server is listening to port ${PORT}`)
    })
}).catch((err)=>{
 console.log("Unable to connect to db because"+err)
})
const PORT = 2029

   
