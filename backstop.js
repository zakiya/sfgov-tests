// Get environment variables from ./.env
require('dotenv').config();

// Get Backstop configuration that runs in Pantheon.
const backstopconfig = require('./backstopConfig.js');

// Make config available to other js.
module.exports = backstopconfig;
