const React = require('react')
const $ = require('jquery')
const UserInformation = require('./UserInformation.jsx')
const ServiceInformation = require('./ServiceInformation.jsx')
const Queue = require('./Queue.jsx')
const localStorage = require('../services/localStorage')

module.exports = React.createClass({
    getInitialState: function () {
        return {averageAttentionTime: 0, queue: []};
    },

    componentDidMount: function () {
        this.serverRequest = $.get('/queue', function (queueInfo) {
            this.setState(queueInfo);
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },


    render: function () {
        const myHash = localStorage.get('userHash')

        const queueInfo = this.state;
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
