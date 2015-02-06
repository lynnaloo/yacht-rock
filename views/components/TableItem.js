/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

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
      attrs = this.props.attrs || [],
      attributes = attrs.map(function (col, i) {
        return (
          <td key={i} className="col-md-1">{item.get(col)}</td>
        );
      }, this);

    return (
      <tr>
        {attributes}
      </tr>
    );
  }
});

module.exports = TableItem;
