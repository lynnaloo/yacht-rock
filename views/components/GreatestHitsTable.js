/** @jsx React.DOM */
  'use strict';

  var React = require('react'),
    Backbone = require('backbone'),
    Table = require('./Table'),
    GreatestHitCollection = require('../../models/GreatestHitCollection');

  Backbone.$ = window.$;

  var GreatestHitsTable = React.createClass({

    render: function () {
      var columns = ['name', 'artist', 'year'],
        headers = ['Title', 'Artist', 'Year'];
      return (
        <Table Collection={GreatestHitCollection} cols={columns}
          headers={headers} title="Songs"/>
      );
    }
  });

  module.exports = GreatestHitsTable;
