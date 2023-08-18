const User = require("../models/userModel");

exports.getUser = async (req, res) => {
  res.status(200).send({
    data: await User.find(),
  });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save();
  res.status(200).send({ data: user });
};
