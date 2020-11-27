"use strict";
var express = require('express');
var test = require('./archive').test;
var Router = express.Router;
var router = Router();
router.get('/', test);
module.exports = router;
