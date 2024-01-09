const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.link

mongoose.connect(db)
.then(()=>{
    console.log(`Database connection is successful`)
})
.catch((e)=>{
    console.log(`Unable to connect to database:${e}`)
})