"use strict";

// Shared config for application

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-developer12345";

const PORT = +process.env.PORT || 3002;


function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "meals_app_test"
      : process.env.DATABASE_URL || "meals_app";
}


const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("meals_app Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("Server is Running.....");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
