"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// Entry point of KUAAA Server.
var server_1 = __importDefault(require("./server"));
var port = Number(process.env.PORT) || 31413;
var init = "\nHello KUAAA. \n\nServer is listening on 0.0.0.0::" + port + ".\n";
server_1["default"].listen(port, function () { console.log(init); });
