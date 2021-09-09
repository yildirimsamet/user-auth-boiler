const express = require("express");
const signin = require("../../controllers/User/signin");
const signup = require("../../controllers/User/signup");
const router = express.Router();

router.use("/signin",signin);
router.use("/signup",signup);

module.exports=router;