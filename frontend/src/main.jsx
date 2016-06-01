const ReactDom = require('react-dom')
const MainComponent = require('./components/Main.jsx')

ReactDom.render(
	<MainComponent></MainComponent>,
	document.getElementById('main-container')
)
