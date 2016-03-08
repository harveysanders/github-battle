var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playersInfo: []
		};
	},
	componentWillMount: function() {
		console.log('componentWillMount');
	},
	componentDidMount: function() {
		var query = this.props.location.query; //props location?
		console.log('componentDidMount');
		// Fetch info from github then udpdate state
		//returns a promise
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				console.log('PLAYERS', players);
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			});

	},
	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
	render: function() {
		return (
			<ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>
		)	
	}
});

module.exports = ConfirmBattleContainer;