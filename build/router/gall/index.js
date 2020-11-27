"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var gall_1 = require("./gall");
var Router = express_1["default"].Router;
var router = Router();
router.get('/', gall_1.test);
exports["default"] = router;
