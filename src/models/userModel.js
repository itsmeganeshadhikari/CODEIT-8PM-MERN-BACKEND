const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Too short name"],
    maxlength: [55, "Too long name"],
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: [6, "Must be minimun six characters long"],
    max: [20, "Must not be more than twenty characters"],
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
