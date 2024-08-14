const express = require("express");

// console.log(process.env.MONGO_URL, "url")

let config = process.env.MONGO_URL;
let tConfig = "profileAPI";

(module.exports = config), tConfig;
