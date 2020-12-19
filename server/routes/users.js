const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");

const AccountController = require("../controllers/Account");

router.get("/", auth, AccountController.index);
router.post(
  "/register",
  [
    check("firstname", "Name is required").not().isEmpty(),
    check("lastname", "Name is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("phone", " Type proper Phone").isNumeric(),
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
//Verify OTP
router.post("/Verify/phone-number", AccountController.Verify);
router.post("/Verify/phone-number/keyOTP");
// Profile
router.get("/UserProfile/:slug", AccountController.getInforById);
router.post("/UpdateProfile/", AccountController.SubmitUpdate);
//router.post("/UpdateProfile/");
router.post("/UpdateProfile/Image");
router.post("/ChangePassword", AccountController.Changepassword);

// FeedBack
router.post("Feedback");
router.get("Feedback");

module.exports = router;
