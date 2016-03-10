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
		//'this' lesson https://egghead.io/playlists/the-this-key-word-250c37d9
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
			}.bind(this)); //bound to external this

	},
	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
	handleInitiateBatte: function() {
		this.context.router.push({
			pathname: '/results',
			state: { //read more later
				playersInfo: this.state.playersInfo
			}
		});
	},
	render: function() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				onInitiateBattle={this.handleInitiateBatte}/>
		)	
	}
});

module.exports = ConfirmBattleContainer;