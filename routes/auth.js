/**
 * Auth routes
 * host + /api/auth
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.post(
  "/register",
  [
    check("name", "The name is required").not().isEmpty(),
    check("email", "The email is required").isEmail(),
    check(
      "password",
      "The password must be at least six characters long"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],

  createUser
);

router.post(
  "/",
  [
    check("email", "The email is required").isEmail(),
    check(
      "password",
      "The password must be at least six characters long"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  loginUser
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
