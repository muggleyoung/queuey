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
			<li key={userInList.uuid} className={userInList.uuid === userHash ? 'user' : ''}>{userInList.name} [{userInList.uuid}]</li>
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
