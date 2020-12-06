const express = require('express');
const router = express.Router();
const { check} = require('express-validator');
const auth = require("../middleware/auth")

const AccountController = require('../controllers/Account')

router.get("/", auth, AccountController.index);
router.get("/Detail", auth, AccountController.LoginS);
router.post(
  "/register",
  [
    //  check('firstname','Name is required').not().isEmpty(),
    //   check('lastname','Name is required').not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    //   check('phone',' Type proper Phone').isNumeric(),
    check("password", "Password is required").not().isEmpty(),
  ],
  AccountController.Register
);

router.post(
  "/login",
  [
    check("email", " Type proper Phone").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
  ],
  AccountController.Login
);

module.exports = router;