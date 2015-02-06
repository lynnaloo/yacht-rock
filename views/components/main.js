/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react'),
  GreatestHitsTable = require('./GreatestHitsTable'),
  RecordApi = require('../helpers/RecordApi');

RecordApi.receiveRecords();

React.renderComponent(
  <GreatestHitsTable />,
  document.getElementById('facebook')
);
