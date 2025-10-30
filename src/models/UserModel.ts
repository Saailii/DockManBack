import User from "../../classes/User.js";
import Sentry from "../../utils/sentry.js";
import { getDB } from "../../database/db.js";

export default class UserModel {

    static db = getDB();

    static async create(user: User) {
        try {
            this.db.serialize(() => {
                const stmt = this.db.prepare(`INSERT INTO User (username, password) VALUES (${user.username, user.username}) `)
                stmt.run("Running insertion")
            })
        } catch (error) {
            Sentry.captureException("Erreur pendant la création du user")
            console.error(error);
        }

    }


}