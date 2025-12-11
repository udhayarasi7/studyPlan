import express from "express";
import { createInitialUser,loginUser } from "../controllers/authControllers.js";
const router = express.Router();
// Registration route
// Login route as post request
router.post(`/user`,createInitialUser);
router.post(`/login`, loginUser);

export default router;
    