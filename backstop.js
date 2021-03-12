// Get environment variables from ./.env
require('dotenv').config();

// Get Backstop configuration.
const backstopconfig = require('./backstopConfig.js');

// Make config available to other js.
module.exports = backstopconfig;
