'use strict';

var app = app || {};

app.MainView = Backbone.View.extend({
	el: '#mainView',
	numberOfDots: 0,
	points: 0,
	timer: null,
	
	initialize: function() {
		app.globals.get("keyController").on("change:lastKey", this.keyClicked, this);
		
		// TODO: workaround: wait 1 sec to have correct window size.
		var self = this;
		setTimeout(function() {self.el.width = window.innerWidth; self.el.height = window.innerHeight; self.nextRound(false);}, 1000);
	},

	render: function() {
		var context = this.el.getContext("2d");
		context.clearRect(0, 0 , this.el.width, this.el.height);
		context.fillStyle = "#FF0000";
		context.font = "20pt Arial";
		context.fillText(this.points, 30, 30);
		
		this.numberOfDots = Math.floor(Math.random() * 10);
		for (var i = 0; i < this.numberOfDots; i++) {
			var radius = 10;
			var x = Math.floor(Math.random() * (this.el.width - radius)) + radius;
			var y = Math.floor(Math.random() * (this.el.height - radius)) + radius;
			
			context.beginPath();
			context.arc(x , y, radius, 0, 2*Math.PI);
			context.stroke();
			context.fill();
		}
	},
	
	keyClicked: function() {
		if (app.globals.get("keyController").get("lastKey") == this.numberOfDots) {
			this.nextRound(true);
		}
		else if (app.globals.get("keyController").get("lastKey") != -1) {
			this.nextRound(false);
		}
	},
	
	nextRound: function(isCorrect) {
		if (isCorrect) {
			this.points++;
		}
		else {
			this.points = 0;
		}
		
		this.render();
		
		window.clearInterval(this.timer);
		var self = this;
		this.timer = window.setInterval(function() {self.nextRound(false);}, 3000);
	},
});