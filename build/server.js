"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// Attaching plugins to express app.
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use('/', router_1["default"]);
exports["default"] = app;
