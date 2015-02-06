'use strict';

// preprocessor.js
var ReactTools = require('react-tools');
module.exports = {
  process: function(src) {
    console.log("I'm transforming!!");
    return ReactTools.transform(src);
  }
};
