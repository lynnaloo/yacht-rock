/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react'),
  GreatestHitsTable = require('./GreatestHitsTable'),
  RecordApi = require('../helpers/RecordApi');

RecordApi.receiveRecords();

React.render(
  <GreatestHitsTable />,
  document.getElementById('facebook')
);
