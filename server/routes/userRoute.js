const express = require("express");
const {registerUser, loginUser, findUser, getUser} = require("../controller/userController");
const router = express.Router();

router.post("/register" , registerUser);
router.post("/login", loginUser);
router.get("/finduser/:id", findUser);
router.get("/getusers", getUser);


module.exports = router;