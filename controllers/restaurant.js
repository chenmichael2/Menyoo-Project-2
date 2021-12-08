const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { restaurant } = require("../models");
// CREATE PHO HANA RESTAURANT
// router.get('/', function(req, res) {
//     restaurant.create({
//         name: "Pho Hana Restaurant",
//         hours: ["10:30-9", "10:30-9", "10:30-9", "10:30-9", "10:30-9", "10:30-9", "10:30-9"],
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