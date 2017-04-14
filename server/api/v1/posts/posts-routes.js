"use strict";

var router = require("express").Router();
var controller = require("./posts-controller");

/*
 * /api/posts/     GET    - READ ALL
 * /api/posts/     POST   - CREATE
 * /api/posts/:id  GET    - READ ONE
 * /api/posts/:id  PUT    - UPDATE
 * /api/posts/:id  DELETE - DELETE
 */

router.route("/")
    .get(controller.all)
    .post(controller.post);

router.route("/:id")
    .get(controller.get)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;