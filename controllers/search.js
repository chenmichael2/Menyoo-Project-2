const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');
const { Op } = require("sequelize");

const { restaurant } = require('../models');

router.post('/', function (req, res) {
    let name = req.body.name;
    let location = req.body.location;
    // if (name === '' && location === '') {
    //     restaurant.findAll()
    //     .then(function(restaurants) {
    //         res.render('pages/restaurant/index', { restaurants });
    //     })
    //     .catch(function(err) {
    //         console.log('ERROR', err);
    //         res.render('404', { message: 'There is a problem with the search. Please Try again' });
    //     })
    // } else if (name === '' && location !== '') {
    //     restaurant.findAll()
    // }
    restaurant.findAll({
        where: {
                name: {[Op.iLike]: '%' + name + '%'} ,
                location: {[Op.iLike]: '%' + location + '%'}
        }
    })
    .then(function(restaurants) {
        console.log('RESULTS ARE', restaurants);
        res.render('pages/restaurant/index', { restaurants });
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'There is a problem with the search. Please Try again' });
    })
});

module.exports = router;