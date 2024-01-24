const express = require("express");
const {registerUser, loginUser, findUser} = require("../controller/userController");
const router = express.Router();

router.post("/register" , registerUser);
router.post("/login", loginUser);
router.get("/finduser/:id", findUser);


module.exports = router;