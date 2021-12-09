const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');

const { food, restaurant } = require("../models");

// View Menu
router.get('/', function(req, res) {
    food.findAll()
    .then(function(foodList) {
        console.log('FOUND ALL FOOD', foodList);
        res.render('pages/food/index', { food: foodList }); 
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'There is an error finding foods. Try Again' });
    })
})

// // CREATE A FOOD
router.get('/new', isLoggedIn, function (req, res) {
    res.render('pages/food/new');
});

// // READ
router.get('/:id', function(req, res) {
    let foodIndex = Number(req.params.id);
    food.findByPk(foodIndex)
    .then(function(food) {
        if (food) {
            let food1 = food.toJSON();
            console.log(food1);
            res.render('pages/food/show', { food1 });
        } else {
            console.log('THIS FOOD DOESNT EXIST');
            res.render('404', { message: 'Cannot find food. Please Try again' });
        }
    })
    .catch(function(err) {
        console.log('ERROR', err);
    })
});
// //Edit

router.get('/edit/:id', isLoggedIn, function(req, res) {
    let foodIndex = Number(req.params.id);
    food.findByPk(foodIndex)
    .then(function(food) {
        if (food) {
            food1 = food.toJSON();
            res.render('pages/food/edit', { food1 });
        } else {
            console.log('Cannot find food');
            res.render('404', { message: 'Cannot find food info. Please Try again' });
        }
    })
    .catch(function(err) {
        console.log('ERROR', err);
    })
})

router.post('/', isLoggedIn, function(req, res) {
    console.log('SUBMITTED FORM', req.body);
    food.create({
        name: req.body.name, 
        description: req.body.description,
        ingredients: req.body.ingredients,
        meal: req.body.meal,
        foodType: req.body.foodType,
        price: req.body.price,
    })
    .then(function(newFood) {
        console.log('NEW FOOD', newFood.toJSON());
        newFood = newFood.toJSON();
        res.redirect(`/${newFood.id}`);
    })
    .catch(function(err) {
        console.log('THERE IS AN ERROR', err);
        res.render('404', { message: 'Food not created. Try again.' });
    })
})
router.put('/:id', function(req, res) {
    console.log('EDIT FORM DATA', req.body);
    let foodIndex = Number(req.params.id);
    food.update({
        name: req.body.name, 
        description: req.body.description,
        ingredients: req.body.ingredients,
        meal: req.body.meal,
        foodType: req.body.foodType,
        price: req.body.price,
    }, {
        where: { id: foodIndex }
    })
    .then(function(response) {
        console.log('FOOD IS UPDATED', response);
        res.redirect(`/food/${foodIndex}`);
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'Update was not successful. Please try again' });
    })
})

// CREATE Food for Pho Hana
// router.get('/', function(req, res) {
//     food.create({
//         name: 'Beef Combo Pho', 
//         description: 'Large Vietnamese noodle soup with beef',
//         ingredients: 'Rare steak, flank, tendon, and tripe',
//         meal: 'Breakfast, Lunch, Dinner',
//         foodType: 'Vietnamese',
//         price: 8.75,
//         likes: 13
//     })
//     .then(function(food) {
//         console.log('FOOD CREATED', food.toJSON());
//     })
//     .catch(function(err) {
//         console.log('THERE IS AN ERROR FOOD', err);
//     })
// });
    
module.exports = router;