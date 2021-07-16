const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv");
const checkauth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log(authHeader);
  var token = authHeader && authHeader.split(" ")[1];
  if (token) {
    try {
      console.log(token);
      const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(verify);
      if (verify) {
        req.userId = verify.userId;
        next();
      }
    } catch (error) {
      console.log(error);
      return res
        .status(403)
        .json({ successs: false, message: "Access forbidden" });
    }
  } else {
    return res
      .status(401)
      .json({ successs: false, message: "Access token not found" });
  }
};

module.exports = checkauth;
