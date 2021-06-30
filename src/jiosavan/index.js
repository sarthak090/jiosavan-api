const searchMethods = require("./search");
const songsMethods = require("./songs");
module.exports = {
  ...searchMethods,
  ...songsMethods,
};
