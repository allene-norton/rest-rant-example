const router = require('express').Router()
const places = require('../models/place-models.js')

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
    console.log(places)
})

// POST /places
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})


//NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
    res.render('places/show', {
        place: places[req.params.id]
    })
})


module.exports = router