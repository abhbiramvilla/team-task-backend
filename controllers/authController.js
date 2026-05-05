const User = require("../models/User");

// SIGNUP
const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password,
      role
    });

    // remove password from response
    user.password = undefined;

    res.status(201).json(user);

  } catch (err) {
    console.error(err); // 👈 very important for Railway logs

    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = { signup };