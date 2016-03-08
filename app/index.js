/*
	***FIRST***
	Focused
	Independent
	Reusable
	Small
	Testable
*/
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')

ReactDOM.render(
	routes,
	document.getElementById('app')
);