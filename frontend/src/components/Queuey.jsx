const React = require('react')
const UserInformation = require('./UserInformation.jsx')
const ServiceInformation = require('./ServiceInformation.jsx')
const Queue = require('./Queue.jsx')
const localStorage = require('../services/localStorage')

module.exports = React.createClass({
	render: function(){
		const myHash = localStorage.get('userHash')
		const queueInfo = {
			averageAttentionTime: 5432322,
			queue: [
				{
					hash: "i423i3i234in2ud",
					name: "Mei"
				},
				{
					hash: "hdy3ujima234m2o",
					name: "Anders"
				},
				{
					hash: "edgarhash",
					name: "Edgar"
				}
			]
		}
		return (
			<div>
				<div>here comes the logo</div>
				<UserInformation queueInfo={queueInfo} userHash={myHash}></UserInformation>
				<Queue queue={queueInfo.queue} userHash={myHash}></Queue>
				<ServiceInformation></ServiceInformation>
			</div>
		)
	}
})
