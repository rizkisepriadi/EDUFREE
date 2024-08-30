import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";
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

export const User = mongoose.model("User", userSchema) 