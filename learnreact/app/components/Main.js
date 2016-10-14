/*
* @Author: Fan
* @Date:   2016-10-12 11:21:06
* @Last Modified by:   Fan
* @Last Modified time: 2016-10-12 11:55:52
*/

var React = require('react');

var Main = React.createClass({
	render:function(){
		return (
			<div className='main-container'>
					{this.props.children}
			</div>
		)
	}
});

module.exports = Main;