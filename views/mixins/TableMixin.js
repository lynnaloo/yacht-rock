  'use strict';

  var TableMixin = {
    /*
      Fetch the models for the model collection.
    */
    getModels: function () {
      var models = new this.props.Collection(),
        self = this;
      models.fetch({
        success: function (data) {
          self.setState({data: models, message: ''});
        },

        error: function (collection, response) {
          console.log(response.statusText);
          self.setState({
            message: 'Error fetching data from the server'
          });
        }
      });
    },

    /*
      Destroy this selected model.
    */
    deleteModel: function (model) {
      var self = this;
      model.destroy({
        success: function (result) {
          // refresh the data
          self.setState({data: this.state.data, message: ''});
        },

        error: function (collection, response) {
          console.log(response.statusText);
          self.setState({
            message: 'Error deleting record'
          });
        }
      });
    },

    /*
      Send model to edit function in parent component.
    */
    editModel: function (model) {
      this.props.onEditForm(model);
    },

    /*
      Get the collection of models for this table.
    */
    componentWillMount: function() {
      this.getModels();
      setInterval(this.getModels, this.props.pollInterval);
    }
  };

  module.exports = TableMixin;
