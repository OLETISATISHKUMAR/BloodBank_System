const express = require("express");
const route = express.Router();

const { createUser } = require("../controllers/auth.controller");

route.post("/api/register-user", createUser);

module.exports = route;
