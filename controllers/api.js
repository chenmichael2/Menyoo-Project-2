const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');
const { Op } = require("sequelize");
const fetch = require("node-fetch");
let API_URL = "https://api.yelp.com/v3/businesses/{id}";
const yelp = require('yelp-fusion');
const axios = require('axios');


const apiKey = 'SwZeP7pkzyUv8lnN-mLpMCnzHLDA3fP1X0YkxiZv3pXSkvULcBOMtKCy3buty5aVbtyBr9FesRUZxIeDUk__DUdw0FgQkHB9mELZ_HBXQr8MpIhAFaFdKXwW8UqxYXYx';
const client = yelp.client(apiKey);

const { restaurant } = require('../models');

//API

router.get('/', function (req, res) {
  response = axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}&number=${queryResultsQuantity}`)


    // console.log('getting API');
    // client.search()
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(e) {
    //     console.log(e);
    //   });
    // fetchApi();
})

function fetchApi() {
    fetch(API_URL)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err)
        });
}

module.exports = router;
