/**
* GreatestHit.js
*
* @description :: Greatest Hit of Yacht Rock
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    "id": {
      type: "integer",
      autoIncrement: true
    },
    "name": {
      type: 'string'
    },
    "artist": {
      type: 'string'
    },
    "year": {
      type: 'integer'
    }
  }
};
