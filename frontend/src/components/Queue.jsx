const React = require('react')

module.exports = React.createClass({
	renderQueueList(queue, userHash){
		return (
			<ul>
				{queue.map(userInList => this.renderUserInList(userInList, userHash))}
			</ul>
		)
	},
	renderUserInList(userInList, userHash){
		return (
			<li key={userInList.hash} className={userInList.hash === userHash ? 'user' : ''}>{userInList.name}</li>
		)
	},
	render(){
		const { queue, userHash } = this.props
		return (
			<div className="queue-container">
				{this.renderQueueList(queue, userHash)}
			</div>
		)
	}
})
