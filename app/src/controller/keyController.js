'use strict';

var app = app || {};

app.KeyController = Backbone.Model.extend({
	defaults: {
		lastKey: -1,
		widgetAPI: null,
		tvKey: null,
	},
	
	initialize: function() {
		this.set("widgetAPI", new Common.API.Widget());
		this.set("tvKey", new Common.API.TVKeyValue());
		
		document.getElementById("anchor").focus();
		this.get("widgetAPI").sendReadyEvent();
	},
	
	keyClicked: function() {
		var keyCode = event.keyCode;
		
		var tvKey = this.get("tvKey");
		var clickedNumber = -1;
		switch(keyCode) {
		case 17: // TODO: workaround: KEY_O is undefined...
			clickedNumber = 0;
			break;
		case tvKey.KEY_1:
			clickedNumber = 1;
			break;
		case tvKey.KEY_2:
			clickedNumber = 2;
			break;
		case tvKey.KEY_3:
			clickedNumber = 3;
			break;
		case tvKey.KEY_4:
			clickedNumber = 4;
			break;
		case tvKey.KEY_5:
			clickedNumber = 5;
			break;
		case tvKey.KEY_6:
			clickedNumber = 6;
			break;
		case tvKey.KEY_7:
			clickedNumber = 7;
			break;
		case tvKey.KEY_8:
			clickedNumber = 8;
			break;
		case tvKey.KEY_9:
			clickedNumber = 9;
			break;
		default:
			 break;
		}
		
		this.set("lastKey", -1); // TODO: workaround: 5 to 5 won't be a "change"
		this.set("lastKey", clickedNumber);
	}
});