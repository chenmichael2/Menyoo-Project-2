const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');

const { user, restaurant } = require("../models");

//VIEW RESTAURANTS
router.get('/', function (req, res) {
    restaurant.findAll()
    .then(function(restaurantList) {
        console.log('FOUND ALL RESTAURANTS', restaurantList);
        res.render('pages/restaurant/index', { restaurants: restaurantList });
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'There is an error finding restaurants. Try again. '})
    })
})

// CREATE A RESTAURANT PAGE
router.get('/new', isLoggedIn, function (req, res) {
    res.render('pages/restaurant/new');
});

// READ
router.get('/:id', function(req, res) {
    let restaurantIndex = Number(req.params.id);
    restaurant.findByPk(restaurantIndex)
    .then(function(restaurant) {
        if (restaurant) {
            let restaurant1 = restaurant.toJSON();
            console.log(restaurant1);
            res.render('pages/restaurant/show', { restaurant1 });
        } else {
            console.log('THIS RESTAURANT DOESNT EXIST');
            res.render('404', { message: 'Cannot find restaurant. Please Try again' });
        }
    })
    .catch(function(err) {
        console.log('ERROR', err);
    })
});
//Edit

router.get('/edit/:id', isLoggedIn, function(req, res) {
    let restaurantIndex = Number(req.params.id);
    restaurant.findByPk(restaurantIndex)
    .then(function(restaurant) {
        if (restaurant) {
            restaurant1 = restaurant.toJSON();
            res.render('pages/restaurant/edit', { restaurant1 });
        } else {
            console.log('Cannot find restaurant');
            res.render('404', { message: 'Cannot find restaurant info. Please Try again' });
        }
    })
    .catch(function(err) {
        console.log('ERROR', err);
    })
})

router.post('/', isLoggedIn, function(req, res) {
    console.log('SUBMITTED FORM', req.body);
    restaurant.create({
        name: req.body.name,
        mon: req.body.mon,
        tue: req.body.tue,
        wed: req.body.wed,
        thu: req.body.thu,
        fri: req.body.fri,
        sat: req.body.sat,
        sun: req.body.sun,
        description: req.body.description,
        location: req.body.location,
        verified: false,
        price: req.body.price
    })
    .then(function(newRestaurant) {
        console.log('NEW RESTAURANT', newRestaurant.toJSON());
        newRestaurant = newRestaurant.toJSON();
        // if (user.verify === true) {
        //     newRestaurant.update({
        //         verified: true
        //     })
        //     console.log('RESTAURANT VERIFIED');
        // } else {
        //     console.log('RESTAURANT NOT VERIFIED');
        // }
        res.redirect(`restaurant/${newRestaurant.id}`);
    })
    .catch(function(err) {
        console.log('THERE IS AN ERROR', err);
        res.render('404', { message: 'Restaurant not created. Try again.' });
    })
})
router.put('/:id', function(req, res) {
    console.log('EDIT FORM DATA', req.body);
    let restaurantIndex = Number(req.params.id);
    restaurant.update({
        name: req.body.name,
        mon: req.body.mon,
        tue: req.body.tue,
        wed: req.body.wed,
        thu: req.body.thu,
        fri: req.body.fri,
        sat: req.body.sat,
        sun: req.body.sun,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price
    }, {
        where: { id: restaurantIndex }
    })
    .then(function(response) {
        console.log('RESTAURANT IS UPDATED', response);
        res.redirect(`/restaurant/${restaurantIndex}`);
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'Update was not successful. Please try again' });
    })
})

// DELETE
// router.delete('/:id', function(req, res) {
//     let restaurantIndex = Number(req.params.id);
//     restaurant.destroy({
//         where: { id: restaurantIndex }
//     })
//     .then(function(response) {
//         console.log('DELETED', response);
//         res.redirect('/restaurants');
//     })
//     .catch(function(err) {
//         console.log('ERROR', err);
//     })
// });


// // CREATE PHO HANA RESTAURANT
// router.get('/', function(req, res) {
//     restaurant.create({
//         name: "Pho Hana Restaurant",
//         mon: "10:30-9",
//         tue: "10:30-9",
//         wed: "10:30-9",
//         thu: "10:30-9",
//         fri: "10:30-9",
//         sat: "10:30-9",
//         sun: "10:30-9",
//         rating: 5,
//         description:"Vietnamese soup bowls, vermicelli & other regional fare served in a cozy strip-mall setting.",
//         categories:["Vietnamese", "Casual"],
//         location:"22815 Hawthorne Blvd, Torrance, CA 90505",
//         price: '$',
//     })
//     .then(function(restaurant) {
//         console.log('RESTAURANT CREATED', restaurant.toJSON());
//     })
//     .catch(function(err) {
//         console.log('THERE IS AN ERROR CREATING RESTAURANT', err);
//     })
// });

module.exports = router;