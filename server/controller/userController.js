const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id)=>{
    const jwtkey = process.env.JWT_KEY;
    return jwt.sign({ _id },jwtkey,{expiresIn: "3d"});
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await userModel.findOne({ email });

        if (user) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Email must be valid' });
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: 'Password must be strong' });
        }

        user = new userModel({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = createToken(user._id);

        res.status(200).json({ _id: user._id, name, email, token });
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { registerUser };