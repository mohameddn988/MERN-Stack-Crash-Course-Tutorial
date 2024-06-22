require('dotenv').config()

const express = require('express')

//express app
const app = express()

//middleware
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Hello, world'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})
