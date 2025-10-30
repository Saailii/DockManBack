import "express";
import { JwtPayload } from "jsonwebtoken";
import User from "../../classes/User.ts";

declare module "express-serve-static-core" {
    interface Request {
        user?: User;
    }
}
