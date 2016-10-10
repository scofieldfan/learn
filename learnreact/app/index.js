/*
* @Author: Fan
* @Date:   2016-10-10 11:32:21
* @Last Modified by:   Fan
* @Last Modified time: 2016-10-10 13:05:35
*/

var React = require('react');
var ReactDom = require('react-dom');
var HelloWorld = React.createClass({
	render:function(){
		return (
			<div>Hello world！！！</div>
			)
	}
});
ReactDom.render(<HelloWorld/>,document.getElementById('app'));