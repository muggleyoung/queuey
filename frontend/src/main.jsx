const ReactDom = require('react-dom')
const React = require('react')
const Queuey = require('./components/Queuey.jsx')

ReactDom.render(
	<Queuey></Queuey>,
	document.getElementById('main-container')
)
