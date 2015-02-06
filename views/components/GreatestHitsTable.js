/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react'),
  Table = require('./Table'),
  RecordStore = require('../stores/RecordStore'),
  ActionCreators = require('../actions/ActionCreators');

var _getStateFromStores = function () {
  return RecordStore.getAllRecords();
};

var GreatestHitsTable = React.createClass({

  componentDidMount: function () {
    RecordStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    RecordStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      data: _getStateFromStores,
      message: ''
    });
  },

  getRecords: function () {
    this.setState({data: _getStateFromStores, message: ''});
  },

  componentWillMount: function () {
    this.getRecords();
    setInterval(this.getRecords, this.props.pollInterval);
  },

  render: function () {
    var columns = ['name', 'artist', 'year'],
      headers = ['Title', 'Artist', 'Year'];
    return (
      <Table cols={columns} headers={headers} title="Songs"/>
    );
  }
});

module.exports = GreatestHitsTable;
