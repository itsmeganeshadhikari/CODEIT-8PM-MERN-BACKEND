exports.getUser = (req, res) => {
  res.status(200).send({
    name: "Ganesh Adhikari",
    address: "Dharan",
    phoneNumber: "9863252121",
  });
};

exports.createUser = () => {};
