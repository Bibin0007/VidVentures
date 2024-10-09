import express  from "express";
import { registerUser, verifyUser } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/verify", verifyUser);






export default UserRouter;