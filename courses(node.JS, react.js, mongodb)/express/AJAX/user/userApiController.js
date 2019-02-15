const User = require("./User");

let userApiController = {};

module.exports = userApiController;

userApiController.getAll = (req, res) => {
   res.json(User.getAll());
};
userApiController.get = (req, res) => {
   if (User.has(req.id)) {
      res.json(User.getById(req.id));
   } else {
      res.status(404);
      res.end();
   }
};

userApiController.post = (req, res) => {
   if (User.isValid(req.body)) {
      let user = new User(req.body.name, req.body.age);
      User.save(user);
      res.status(201);
      res.set("Location", `${req.baseUrl}/${user.id}`);
      res.end();
   } else {
      res.status(400);
      res.end();
   }
};

userApiController.put = (req, res) => {
   if (!User.has(req.id)) {
      res.status(404);
      res.end();
   } else if (!User.isValid(req.body)) {
      res.status(400);
      res.end();
   } else {
      User.update(req.id, req.body);
      res.end();
   }
};

userApiController.delete = (req, res) => {
   if (User.has(req.id)) {
      User.remove(req.id);
      res.end();
   } else {
      res.status(404);
      res.end();
   }
};