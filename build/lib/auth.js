"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var crypto = require('crypto');
var util = require('util');
var jwt = require('jsonwebtoken');
var Expired = require('./db').Expired;
var pbkdf2 = util.promisify(crypto.pbkdf2);
var randomBytes = util.promisify(crypto.randomBytes);
var KEY_LEN = 512;
var jwtSecret = process.env.JWT_SECRET || 'DEV_TEST';
var generatePassword = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    var ITER, ALGO, salt, digest;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ITER = 123456;
                ALGO = 'sha512';
                return [4 /*yield*/, randomBytes(16)];
            case 1:
                salt = _a.sent();
                return [4 /*yield*/, pbkdf2(password, salt, ITER, KEY_LEN, ALGO)];
            case 2:
                digest = _a.sent();
                return [2 /*return*/, ALGO + ":" + salt.toString('base64') + ":" + ITER + ":" + KEY_LEN + ":" + digest.toString('base64')];
        }
    });
}); };
var comparePassword = function (password, storedPassword) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, algo, encodedSalt, iterStr, keylenStr, encodedDigest, iter, keylen, salt, digest, hashed;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = storedPassword.split(':'), algo = _a[0], encodedSalt = _a[1], iterStr = _a[2], keylenStr = _a[3], encodedDigest = _a[4];
                iter = parseInt(iterStr, 10);
                keylen = parseInt(keylenStr, 10);
                salt = Buffer.from(encodedSalt, 'base64');
                digest = Buffer.from(encodedDigest, 'base64');
                return [4 /*yield*/, pbkdf2(password, salt, iter, keylen, algo)];
            case 1:
                hashed = _b.sent();
                return [2 /*return*/, Buffer.compare(hashed, digest) === 0];
        }
    });
}); };
var issueToken = function (user) {
    var token = jwt.sign({
        uid: user.uid,
        name: user.name,
        level: user.level,
        nonce: crypto.randomBytes(16)
    }, jwtSecret, {
        expiresIn: '7d',
        issuer: 'kuaaa.net',
        subject: 'Auth Token'
    });
    return token;
};
var verifyToken = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, expired, verified;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = req.body.token;
                if (!token) {
                    req.user = null;
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, Expired.findOne({
                        where: {
                            token: token
                        },
                        attributes: ['token']
                    })];
            case 1:
                expired = _a.sent();
                if (expired) {
                    req.user = null;
                    return [2 /*return*/, next()];
                }
                verified = jwt.verify(token, jwtSecret);
                req.user = verified;
                return [2 /*return*/, next()];
        }
    });
}); };
module.exports = {
    generatePassword: generatePassword, comparePassword: comparePassword, issueToken: issueToken, verifyToken: verifyToken
};
