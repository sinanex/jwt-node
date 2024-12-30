const express = require('express')
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser')
const router = require('./routes/product')

app.get('/',(req,res)=>{
    res.send("<h1>server is running</h1>")
})
app.use(cors())
app.use('/user',router)
app.listen(9000,()=>console.log("server running"))
