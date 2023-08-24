const User = require("../models/userModel");

exports.getUser = async () => {
  const user = await User.find();
  if (!user) {
    return "No user found!";
  }
  return user;
};

exports.createUser = async (data) => {
  const user = new User(data);
  const message = await user.save();
  return message;
};

exports.editUser = async (id, req) => {
  var user;
  try {
    user = await User.updateOne({ _id: id }, { $set: req.body });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
  return user;
};

exports.deleteUser = async (id) => {
  var user;
  try {
    user = await User.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
  return user;
};
