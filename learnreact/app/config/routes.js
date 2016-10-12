/*
* @Author: Fan
* @Date:   2016-10-11 12:27:46
* @Last Modified by:   Fan
* @Last Modified time: 2016-10-11 12:42:23
*/

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router>
		<Route Path='/' component={Main}>
	<Router>
);
module.exports routes;