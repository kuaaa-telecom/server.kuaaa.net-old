import { RequestHandler } from 'express';
import { Db, getRepository } from 'typeorm';

import { CustomError } from '../../lib/error';
import { generatePassword, comparePassword, signJWT, verifyJWT } from '../../lib/auth';

import User from '../../lib/model/user';
import ExpiredToken from '../../lib/model/expiredToken';


const verify: RequestHandler = async (req, res, next) => {
    try {
        const decoded = await verifyJWT(req.body.token);
        res.status(200).json({"msg":"Verified Successfully"});
    } catch (err) {
        next(err);
    }
    return next();
}

const register: RequestHandler = async (req, res, next) => {
    try{
        const uid = req.body.id;
        const row = await getRepository(User).findOne({where: {id: uid}});

        if(row === undefined){
        const password: string = req.body.password;
        const encryptedPassword = await generatePassword(password);

        const user: User = await getRepository(User).create({
            id: uid,
            password: encryptedPassword,
            name: req.body.name,
            sid: req.body.sid,
            belong: req.body.belong,
            email: req.body.email
        });
        getRepository(User).save(user);
        res.status(200).json({
            "msg": "Registered Successfully",
            "id": uid
        });
        }
        else throw new CustomError('REGISTER_FAILED', 409, 'Input ID is already in use.');
    } catch(err){
        next(err);
    }
    return next();
};

const unregister: RequestHandler = async (req, res, next) => {
    try{
        const uid = req.body.id;
        const row = await getRepository(User).findOne({where: {id: uid}});
        if(row !== undefined){
            row!.isActive = false;
            getRepository(User).save(row);
            res.status(200).json({"msg":"Unregister Successfully"});
        }else throw new CustomError('UNREGISTER_FAILED', 409, 'Username does not exist');
    } catch (err) {
        next(err);
    }
    return next();
};

const login: RequestHandler = async (req, res, next) => {
    try{
        const uid = req.body.id;
        const password = req.body.password;
        const row = await getRepository(User).findOne({
            where: {
                id: uid,
                isActive: true
        }});

        if(row !== undefined) {
            const checkRes = await comparePassword(password, row.password);
            if(checkRes){
                const token = signJWT(uid);
                res.json({
                msg: "Login Successfully",
                uid: uid,
                token: token
                });
            } else throw new CustomError('LOGIN_FAILED', 401, 'Wrong password.');
        } else throw new CustomError('LOGIN_FAILED', 409, 'Username does not exist.');
    }catch (err) {
        next(err);
    }
    return next();
};

const logout: RequestHandler = async (req, res, next) => {
    try {
        const token = req.body.token;
        const row = getRepository(ExpiredToken).create({
        token: token
        });
        getRepository(ExpiredToken).save(row);
        res.status(200).json({msg: "Logout Successfully"});
        return next();
    } catch (err) {
        next(err);
    }
};


export {
    register, unregister, login, logout, verify
};
