/** @jsx React.DOM */
  'use strict';

  var React = require('react'),
    Backbone = require('backbone'),
    GreatestHitsTable = require('./GreatestHitsTable');

  Backbone.$ = window.$;

  React.renderComponent(
    <GreatestHitsTable />,
    document.querySelector('Main')
  );
