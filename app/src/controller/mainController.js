'use strict';

var app = app || {};

app.MainController = Backbone.Model.extend({
	defaults: {
		keyController: null,
	},
	
	initialize: function() {
		this.set("keyController", new app.KeyController());
	},
	
	kickOff: function() {
		new app.MainView();
	}
});