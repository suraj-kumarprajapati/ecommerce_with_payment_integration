


import express from "express";
import { loginUser, logout, registerUser, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUsers, getUserDetails } from "../controllers/authController.js";
import { authorizeRoles, isUserAuthenticated } from "../middlewares/authMiddleware.js";


const authRouter = express.Router();


// authentication and authorisation routes
authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(loginUser);
authRouter.route('/logout').get(logout);

authRouter.route('/password/forgot').post(forgotPassword);
authRouter.route('/password/reset/:token').put(resetPassword);



// user's routes
authRouter.route('/me').get(isUserAuthenticated , getUserProfile);
authRouter.route('/me/update').put(isUserAuthenticated, updateProfile);
authRouter.route('/password/update').put(isUserAuthenticated, updatePassword);


// admin routes
authRouter.route('/admin/users').get(isUserAuthenticated, authorizeRoles("admin"), getAllUsers);
authRouter.route('/admin/users/:id').get(isUserAuthenticated, authorizeRoles("admin"), getUserDetails);


export default authRouter; 