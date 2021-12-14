const router = require('express').Router()
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cafe.jpg'
}]

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
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