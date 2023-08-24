const User = require("../models/userModel");
const {
  getUser,
  createUser,
  editUser,
  deleteUser,
} = require("../services/user.service");

exports.getUser = async (req, res) => {
  const user = await getUser();
  res.status(200).send({ data: user });
  ``;
};

exports.createUser = async (req, res) => {
  const user = await createUser(req.body);
  res.status(200).send({ data: user });
};

exports.editUser = async (req, res) => {
  const id = req.params.id;
  const user = await editUser(id, req);
  res.send({ data: user });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const userDeleted = await deleteUser(id);
  res.send({ data: userDeleted });
};
