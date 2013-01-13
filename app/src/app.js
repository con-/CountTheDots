'use strict';

var app = app || {};

// we want globals to exist during kick off, so we first initialize them before the actual kick off
app.globals = new app.MainController();
app.globals.kickOff();