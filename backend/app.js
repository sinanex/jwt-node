const express = require('express')
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser')
const router = require('./routes/product')
const userRout = require('./routes/user')
app.use(bodyparser.json()); 
app.get('/',(req,res)=>{
    res.send("<h1>server is running</h1>")
})
app.use(cors())
app.use('/product',router),
app.use('/user',userRout)
app.listen(9000,()=>console.log("server running"))
