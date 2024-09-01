import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Static signup method for /register
userSchema.statics.signUp = async function (name, email, password) {
  if (!name || !email || !password) {
    throw Error("Please, Full fields all it");
  }
  if (!validator.isEmail(email)) {
    throw Error("This email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Your password is weak");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Your email is already use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

// Static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("You must fill all fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Your Email is incorrect");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Your password is incorrect");
  }

  return user;
};

userSchema.statics.updatePassword = async function (id, oldPassword, newPassword, retypePassword) {
  // Validation
  if (!oldPassword || !newPassword || !retypePassword) {
    throw Error("All fields must be filled");
  }

  const user = await this.findById(id);

  if (!user) {
    throw Error("User not found");
  }

  const match = await bcrypt.compare(oldPassword, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  if (!validator.isStrongPassword(newPassword)) {
    throw Error("Password not strong enough");
  }

  if (newPassword !== retypePassword) {
    throw Error("New Password doesn't match");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  user.password = hash;
  await user.save();

  return user;
};

export const User = mongoose.model("User", userSchema) 