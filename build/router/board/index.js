"use strict";
var express = require('express');
var test = require('./board').test;
var Router = express.Router;
var router = Router();
router.get('/login', test);
module.exports = router;
