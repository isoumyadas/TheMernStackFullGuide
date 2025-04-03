import mongoose from "mongoose";

// mongoose helps use to create schemas

const userSchema = new mongoose.Schema(
  {
    // 1st way to do:
    //   username: String,
    //   email: String,
    //   isActive: Boolean,

    // 2nd way to do:

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    isActive: {
      type: Boolean,
      required: false,
      unique: false,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
