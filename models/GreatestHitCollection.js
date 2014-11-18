(function () {
	'use strict';

	var Backbone = require('backbone');
	Backbone.$ = window.$;

	var	GreatestHitModel = require('./GreatestHitModel');
	var GreatestHitCollection = Backbone.Collection.extend({
			model: GreatestHitModel,
			url : '/GreatestHit'
		});

	module.exports = GreatestHitCollection;

}());
