import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // ❗ hide password before sending response
    user.password = undefined;

    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
