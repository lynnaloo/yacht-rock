/*
 * AppDispatcher
 * A singleton that operates as the central hub for application updates.
 */

'use strict';

var Dispatcher = require('flux').Dispatcher,
  AppConstants = require('../constants/AppConstants');

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests
AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

AppDispatcher.handleServerAction = function (action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;
