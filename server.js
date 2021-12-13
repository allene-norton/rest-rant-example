require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT


//Controllers
app.use('/places', require('./controllers/places-control'))

//Root
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//Wildcard
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(port, () => {
    console.log(`Munchin' on port ${port}...`)
})