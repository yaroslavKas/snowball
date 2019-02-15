const express = require("express");
const bodyParser = require("body-parser");
const userApiController = require("./userApiController");

let userApiRouter = express.Router();

module.exports = userApiRouter;

userApiRouter.use("/:id", (req, res, next) => {
   req.id = Number(req.params.id);
   next();
});

userApiRouter.use("/", bodyParser.json());

userApiRouter.route("/:id")
   .get(userApiController.get)
   .put(userApiController.put)
   .delete(userApiController.delete);

userApiRouter.route("/")
   .get(userApiController.getAll)
   .post(userApiController.post);