(function () {
	'use strict';

	var Backbone = require('backbone');
	Backbone.$ = window.$;

	var GreatestHitsModel = Backbone.Model.extend({
		idAttribute: 'id'
	});

	module.exports = GreatestHitsModel;

}());
