const express = require('express');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
const mongoose = require ('mongoose');
const router = require('./router/schoolrouter')
const  studentRouter = require('./router/studentrouter')
const multer= require('multer')


const app = express()
app.use(express.json())
app.use(router)
app.use(studentRouter)
app.use((err,req,res,next)=>{
    if (err)
        return res.status(400).json({message:'File too large'})

    // else if (err instanceof multer.MulterError){
    //     return res.status(404).json({
    //         message: "Upload image ONLY"
    //     })
    // }
    next()
})

mongoose
.connect(DATABASE_URL)
.then(()=>{

    console.log("Database connected")
    
    app.listen(PORT,()=>{
        console.log(`Server is listening to port ${PORT}`)
    })
}).catch((err)=>{
 console.log("Unable to connect to db because" +err)
})
const PORT = 2029

   
