const React = require('react')
const R = require('ramda')

module.exports = React.createClass({

	getUserInfo: function(queueInfo, userHash){
		if(!userHash) return null
		const { queue, averageAttentionTime } = queueInfo
		const user = R.find(R.propEq('hash', userHash))(queue)
		const placeInTheQueue = (queue.indexOf(user) + 1)
		return {
			timeForAttention:  placeInTheQueue * averageAttentionTime,
			placeInTheQueue: placeInTheQueue
		}
	},

	render: function(){
		const { queueInfo, userHash } = this.props
		const { timeForAttention, placeInTheQueue } = this.getUserInfo(queueInfo, userHash)
		return (
			<div>
				<div>
					<button>Walk away</button>
					<span>{placeInTheQueue}</span>
					<button>Push me down</button>
				</div>
				<div>
					<span>Time for attention: {timeForAttention}</span>
				</div>
			</div>
		)
	}
})
