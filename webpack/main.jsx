const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./app.css');
ReactDOM.render(
	<div>
	<h1 className={style.h1} >Hello,asdfas</h1>
	<h2 className="h2" >Hello,h2</h2>
	</div>,
	document.querySelector('#example')
);
