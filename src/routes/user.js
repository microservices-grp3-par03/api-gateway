const express = require("express");
const createServiceProxy = require("../utils/proxy");

const router = express.Router();
const userServiceProxy = createServiceProxy("http://user-service:3001");

router.use("/", userServiceProxy);

module.exports = router;
