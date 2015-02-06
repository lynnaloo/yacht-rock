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

  getInitialState: function () {
    return {data: _getStateFromStores(), message: ''};
  },

  componentDidMount: function () {
    RecordStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    RecordStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      data: _getStateFromStores(),
      message: ''
    });
  },

  render: function () {
    var columns = ['name', 'artist', 'year'],
      headers = ['Title', 'Artist', 'Year'];
    return (
      <Table cols={columns} headers={headers} data={this.state.data} message={this.state.message} title="Songs"/>
    );
  }
});

module.exports = GreatestHitsTable;
