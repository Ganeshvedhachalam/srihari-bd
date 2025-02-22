const express =require('express');
const formRouter = require('./src/routes/formRoutes');
const dotenv=require("dotenv")
dotenv.config()
const cors = require('cors');
const app=express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",formRouter)
// app.listen(3000,()=>{
//     console.log(('Server is running on port 3000',`http://localhost:3000`))
// })
module.exports=app