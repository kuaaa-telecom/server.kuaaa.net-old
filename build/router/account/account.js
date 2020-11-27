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
var mailer = require('nodemailer');
var Op = require('sequelize').Op;
var _a = require('../../lib/db'), Users = _a.Users, Auth = _a.Auth, Expired = _a.Expired;
var _b = require('../../lib/auth'), generatePassword = _b.generatePassword, comparePassword = _b.comparePassword, issueToken = _b.issueToken;
/* Mailer Init. */
var register = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, pw, sid, belong, name, email, user, newUser, _b, _c;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = req.body, id = _a.id, pw = _a.pw, sid = _a.sid, belong = _a.belong, name = _a.name, email = _a.email;
                if (!id || !pw || !sid || !belong || !name || !email) {
                    res.status(400).json({
                        id: id ? 'OK' : null, pw: pw ? 'OK' : null, sid: sid ? 'OK' : null, belong: belong ? 'OK' : null, name: name ? 'OK' : null, email: email ? 'OK' : null
                    });
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, Users.findOne({
                        where: (_d = {},
                            _d[Op.or] = [
                                { id: id },
                                { email: email },
                            ],
                            _d),
                        attributes: ['id', 'email']
                    })];
            case 1:
                user = _f.sent();
                if (user) {
                    res.status(200).json({ id: id === user.id ? 'conflict' : 'OK', email: email === user.email ? 'conflict' : 'OK' });
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, Users.create({
                        id: id,
                        sid: sid,
                        belong: belong,
                        name: name,
                        email: email
                    })];
            case 2:
                newUser = _f.sent();
                _c = (_b = Auth).create;
                _e = {
                    uid: newUser.uid
                };
                return [4 /*yield*/, generatePassword(pw)];
            case 3: return [4 /*yield*/, _c.apply(_b, [(_e.digest = _f.sent(),
                        _e.isOauth2 = false,
                        _e.level = 0,
                        _e)])];
            case 4:
                _f.sent();
                res.status(201).send({});
                return [2 /*return*/, next()];
        }
    });
}); };
var unregister = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.user) {
                    res.status(401).json({ token: null });
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, Users.findOne({
                        where: {
                            uid: req.user.uid
                        }
                    })];
            case 1:
                user = _a.sent();
                user.destroy();
                res.status(200).json({});
                return [2 /*return*/, next()];
        }
    });
}); };
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, pw, user, auth, jwt;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, pw = _a.pw;
                if (!id || !pw) {
                    res.status(400).json({ id: id ? 'OK' : null, pw: pw ? 'OK' : null });
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, Users.findOne({
                        where: {
                            id: id,
                            isActive: 1
                        },
                        attributes: ['uid', 'name']
                    })];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.status(401).json({});
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, Auth.findOne({
                        where: {
                            uid: user.uid
                        },
                        attributes: ['digest', 'level']
                    })];
            case 2:
                auth = _b.sent();
                if (!auth) {
                    res.status(401).json({});
                    return [2 /*return*/, next()];
                }
                return [4 /*yield*/, comparePassword(pw, auth.digest)];
            case 3:
                if ((_b.sent()) === false) {
                    res.status(401).json({});
                    return [2 /*return*/, next()];
                }
                user.level = auth.level;
                jwt = issueToken(user);
                res.status(200).json({ token: jwt });
                return [2 /*return*/, next()];
        }
    });
}); };
var logout = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.user) {
                    res.status(401).json({ token: null });
                    return [2 /*return*/, next()];
                }
                token = req.body.token;
                return [4 /*yield*/, Expired.create({
                        token: token
                    })];
            case 1:
                _a.sent();
                res.status(200).json({});
                return [2 /*return*/, next()];
        }
    });
}); };
var findid = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, user;
    return __generator(this, function (_b) {
        _a = req.body, name = _a.name, email = _a.email;
        user = Users.findOne({
            where: {
                name: name,
                email: email
            },
            attributes: ['id']
        });
        if (!user) {
            res.status(404).json({});
            return [2 /*return*/, next()];
        }
        res.status(200).json({ id: user.id });
        return [2 /*return*/, next()];
    });
}); };
var resetpw = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, next()];
}); }); };
module.exports = {
    register: register, unregister: unregister, login: login, logout: logout, findid: findid, resetpw: resetpw
};
