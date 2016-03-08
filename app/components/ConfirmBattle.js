var React = require('react');

function ConfirmBattle(props) {
	return props.isLoading
		? <p> LOADING! </p>
		: <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;