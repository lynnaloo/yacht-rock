/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons'),
  _ = require('lodash');

var TableItem = React.createClass({

  /*
    Validation to ensure that the properties sent from the
      parent component is the correct type.
  */
  propTypes: {
    data: React.PropTypes.object
  },

  getDefaultProps: function () {
    return {
      data: {}
    };
  },

  render: function() {
    var item = this.props.data,
      attributes = _.values(item),
      cols = attributes.map(function (col, i) {
        return (
          <td key={i} className="col-md-1">{col}</td>
        );
      }, this);

    return (
      <tr>
        {cols}
      </tr>
    );
  }
});

module.exports = TableItem;
