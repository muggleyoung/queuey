const React = require('react')
const R = require('ramda')
const UserStatus = require('./UserStatus.jsx')

module.exports = React.createClass({

	render: function(){
		const { queueInfo, userHash } = this.props
		if(!userHash){
			return (
				<button>Push me</button>
			)
		}
		return (
			<UserStatus {...this.props}></UserStatus>
		)
	}
})
