const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email is already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
