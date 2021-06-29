// Get environment variables from ./.env
require("dotenv").config();

// Get Backstop configuration.
// const backstopconfig = require('./backstopVaccineConfig.js');
const backstopconfig = require("./backstopResourceCollections.js");

// Make config available to other js.
module.exports = backstopconfig;
