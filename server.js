require('dotenv').config()
const methodOverride = require('method-override')
const express = require('express')
const app = express()
const port = process.env.PORT

//MIDDLEWARE

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Assets
app.use(express.static('public'))


//Controllers
app.use('/places', require('./controllers/places-control.js'))

//Root
app.get('/', (req, res) => {
    res.render('home')
  })

//Wildcard
app.get('*', (req, res) => {
    res.render('error404')
  })

app.listen(port, () => {
    console.log(`Munchin' on port ${port}...`)
})