import User from "../../classes/User.js";
import Sentry from "../../utils/sentry.js";
import { getDB } from "../../utils/prisma.js";

export default class UserModel {

    static db = getDB();

    static async create(user: User) {
        try {
            const db = getDB();
            db.user.create({ data: { email: user.username, password: user.password } })
        } catch (error) {
            Sentry.captureException("Erreur pendant la création du user")
            console.error(error);
        }

    }


}