const {
  Register,
  Login,
  Logout,
  clocktimein,
  clocktimeout,
} = require("../controller/user");
const checkAuthMiddleware = require("../utils/isAuthenticated");
const { Router } = require("express");
const passport = require("passport");
const user_router = Router();

user_router.route("/register").post(Register);
user_router.route("/login").post(checkAuthMiddleware, Login);
user_router
  .route("/logout")
  .post(passport.authenticate("jwt", { session: false }), Logout);
user_router.route("/cl")
.post(passport.authenticate("jwt", { session: false }), clocktimein);
user_router
  .route("/co")
  .post(passport.authenticate("jwt", { session: false }), clocktimeout);

module.exports = user_router;
