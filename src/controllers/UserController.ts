import express, { ErrorRequestHandler, Request, Response } from 'express'
import vine from '@vinejs/vine'
import userSchema from '../validator/userValidator.js';
import User from '../../classes/User.js'
import UserModel from '../models/UserModel.js';
import jwt from 'jsonwebtoken'
import * as Sentry from "@sentry/node";


export default class UsersController {

    static async create(req: Request, res: Response) {
        try {

            const { userUsername, userPassword } = req.body;

            const validateData = await vine.validate({
                schema: userSchema,
                data: { userUsername, userPassword }
            });

            const user: User = new User(validateData.username, validateData.password)

            await UserModel.create(user)

            const { password, ...safeUser } = user

            const token = jwt.sign(safeUser, process.env.JWT_SECRET_KEY!, {
                expiresIn: "10m"
            })
            res.status(201).json({ token })

        } catch (error: any) {
            Sentry.captureException("Erreur pendant la création et la connexion du user", error);


        }
    }


    static async me(req: Request, res: Response) {
        try {






        } catch (error) {
            Sentry.captureException("Erreur pendant la recuperation du user " + error);

        }



    }


}