const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Profile = require("../models/profileModel");
dotenv.config();

// controller for user registration
const userRegister = async (req, res) => {
  try {
    const { email, password, name, userRole } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ msg: "Please enter all required fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      userRole,
    });

    // Save new user
    await newUser.save();

    // Create profile
    const newProfile = new Profile({ user: newUser._id });
    await newProfile.save();

    res.status(201).json({
      msg: "User registered successfully",
      user: newUser,
      profile: newProfile,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// controller for user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          msg: "User logged in successfully",
          token,
          user,
        });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = { userRegister, userLogin };
