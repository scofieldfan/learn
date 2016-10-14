/*
* @Author: Fan
* @Date:   2016-10-10 11:32:21
* @Last Modified by:   Fan
* @Last Modified time: 2016-10-12 22:53:32
*/

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');



var sentryKey = '2e10d4df78a4496b95bf56976c32a760';
var sentryApp = '105435';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;


var _APP_INFO = {
  name: 'fanzhang',
  branch: 'master',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install();


ReactDom.render(
		routes
		,
		document.getElementById('app')
);
/*
var USER_DATA = {
	name : 'fanzhang',
	username : 'scofieldfan',
	image : 'https://avatars0.githubusercontent.com/u/2978786?v=3&s=466'
}

var ProfilePic = React.createClass({
	render:function(){
		return <img src={this.props.imageUrl} style={{height:100,width:100}}/>
	}
});
var Link = React.createClass({
	changeURL:function(){
		window.location.replace(this.props.href);
	},
	render:function(){
		return(
			<span style={{color:'blue',cursor:'pointer'}}
				onClick={this.changeURL}>
			{this.props.children}
			</span>
			)
	}
});
var ProfileLink = React.createClass({
	render:function(){
		return (
			<div>
				<Link href={'https://www.github.com/'+this.props.username} >
				{this.props.username}
				</Link>
			</div>
			)
	}
})

var ProfileName = React.createClass({
	render:function(){
		return(
			<div>{this.props.name}</div>
			)
	}
});

var Avatar = React.createClass({
	render:function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
			)
	}
})

var HelloWorld = React.createClass({
	render:function(){
		return (
			<div>Hello {this.props.name+this.props.anySortOfData}world！！！</div>
			)
	}
});
ReactDom.render(<Avatar user={USER_DATA} />,document.getElementById('app'));
*/
