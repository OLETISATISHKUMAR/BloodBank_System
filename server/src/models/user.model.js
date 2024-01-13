const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "organization", "user", "hospital"],
    },

    name: {
      type: String,
      required: function () {
        return this.role === "admin" || this.role === "user";
      },
    },

    organizationName: {
      type: String,
      required: function () {
        return this.role === "organization";
      },
    },

    hospitalName: {
      type: String,
      required: function () {
        return this.role === "hospital";
      },
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },

    phone: {
      type: Number,
      required: [true, "Phone Number is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
