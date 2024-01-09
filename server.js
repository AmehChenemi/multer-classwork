const express = require("express")
const config = require('./config/config')
const userRouter = require('./routes/router')
const port = process.env.port

const app = express()
app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('./uploader', express.static('uploads'))
app.use('/', (req, res)=>{
   res.send(`WELCOME`)
})



app.listen(port,()=>{
   console.log(`server is listening on port:${port}`)
})