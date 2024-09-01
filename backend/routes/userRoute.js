import express from "express";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

router.post("/login", async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    return res.status(201).json({ email: user.email, token });
  } catch (err) {
    console.log("err.message"); // Perbaikan typo
    res.status(400).json({ error: err.message }); // Perbaikan typo
  }
});

router.post("/register", async function (req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await User.signUp(name, email, password);
    const token = createToken(user._id);

    return res.status(201).json({ email: user.email, token });
  } catch (err) {
    console.log(err.message); // Perbaikan typo
    res.status(400).json({ error: err.message }); // Perbaikan typo
  }
});

router.get("/user/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id); // Tambahkan 'await'

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message); // Perbaikan typo
    res.status(500).json({ error: err.message }); // Perbaikan typo
  }
});

router.put("/user/:id/formaccount", async function (req, res) {
  try {
    const { name, email, username } = req.body;
    if (!name || !email || !username) { // Perbaikan validasi
      return res.status(400).send({
        message: "Send all required fields: name, email, username",
      });
    }

    const { id } = req.params;
    const data = { name, email, username };
    const user = await User.findByIdAndUpdate(id, data, { new: true }); // Tambahkan 'await'

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message); // Perbaikan typo
    res.status(400).send({ message: err.message });
  }
});

router.put("/user/:id/formsecurity", async function (req, res) {
  try {
    const { oldPassword, newPassword, retypePassword } = req.body;
    if (!oldPassword || !newPassword || !retypePassword) {
      return res.status(400).send({
        message: "Please input all fields",
      });
    }

    const { id } = req.params;
    const user = await User.updatePassword(
      id,
      oldPassword,
      newPassword,
      retypePassword
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;
