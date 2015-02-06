/*
 * CustomerStore
 */

'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
  EventEmitter = require('events').EventEmitter,
  AppConstants = require('../constants/AppConstants'),
  ActionTypes = AppConstants.ActionTypes,
  _ = require('lodash');

var CHANGE_EVENT = 'change';

var _records = [];

var RecordStore = _.assign({}, EventEmitter.prototype, {
  getAllRecords: function () {
    return _records;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (fn) {
    this.on(CHANGE_EVENT, fn);
  },

  removeChangeListener: function (fn) {
    this.removeListener(CHANGE_EVENT, fn);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.RECEIVE_RECORDS:
      _records = action.records;
      RecordStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = RecordStore;
