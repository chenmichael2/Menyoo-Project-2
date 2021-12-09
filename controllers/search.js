const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');
const bodyParser = require('body-parser');

const { restaurant } = require('../models');

router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', function (req, res) {
    console.log(req.body);
})
module.exports = router;