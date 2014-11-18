/** @jsx React.DOM */
  'use strict';

  var React = require('react/addons'),
    TableHeader = require('./TableHeader'),
    TableItem = require('./TableItem'),
    TableMixin = require('../mixins/TableMixin'),
    defaultPoll = 1000,
    defaultTitle = 'Default Title',
    defaultCols = [];

  var Table = React.createClass({
    mixins: [TableMixin], // Mixin common table logic

    /*
      Validation to ensure that the properties sent from the
        parent component is the correct type.
    */
    propTypes: {
      cols: React.PropTypes.array,
      pollInterval: React.PropTypes.number,
      title: React.PropTypes.string,
      headers: React.PropTypes.array
    },

    getDefaultProps: function() {
      return {
        title: defaultTitle,
        pollInterval: defaultPoll,
        cols: defaultCols
      };
    },

    getInitialState: function () {
      return {data : [], message : ''};
    },

    render: function () {
      var models = this.state.data,
        headers = this.props.headers || this.props.cols,
        alert = <div className="alert alert-danger" role="alert"><strong>{this.state.message}</strong></div>,
        tableRows = models.map(function (model, i) {
          return (
            <TableItem
              key={i}
              data={model}
              attrs={this.props.cols}
              onDelete={this.deleteModel.bind(this, model)}
              onEdit={this.editModel.bind(this, model)}
            />
          );
        }, this);

      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">{this.props.title}</div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <TableHeader cols={headers}/>
                <tbody>
                  {tableRows}
                  </tbody>
              </table>
            </div>
          </div>
          { this.state.message ? alert : '' }
        </div>
      );
    }
  });

  module.exports = Table;
  module.exports.defaultPoll = defaultPoll;
  module.exports.defaultTitle = defaultTitle;
  module.exports.defaultCols = defaultCols;
