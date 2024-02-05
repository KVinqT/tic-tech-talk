import express from "express";
import { login_user } from "../controllers/auth/login";
const loginRouter = express.Router();

loginRouter.post("/", login_user);

export default loginRouter;
