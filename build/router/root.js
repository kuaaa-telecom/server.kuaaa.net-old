"use strict";
exports.__esModule = true;
var hello = function (req, res, next) {
    res.send('GET / <br> Hello KUAAA.');
    return next();
};
exports["default"] = hello;
