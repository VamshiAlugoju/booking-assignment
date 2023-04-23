
const Users = require("../models/users");

exports.getUsers = (req, res, next) => {
  Users.findAll()
    .then((users) => {
      // console.log(users)
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
};



exports.postusers = (req, res, next) => {
  const name = req.body.name;
  const Email = req.body.Email;
  const phone = req.body.phone;

  Users.create({ name, Email, phone })
    .then((result) => {
      console.log("created");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};



exports.deleteusers = (req, res, next) => {
  let Id = req.params.id;
  Users.destroy({
    where: {
      id: Id,
    },
  })
    .then((result) => {
      console.log("deleted");
      res.send("deleted");
    })
    .catch((err) => console.log(err));
};
