import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { fetchGitHub } from './fetchGitHub';
import { commitCard } from './commitCard';

export default class GitHubWidget extends Component {
	constructor() {
		super()
		this.state = {
			messages: [],
			error: null
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)
	}

	componentWillMount() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;
		this.fetchGitHub(gitHubProfile, gitHubRepo, this.stateSet)
	}

	stateSet(key,val) {
		console.log(val)
		this.setState({ [key]:val })
	}

	render() {
		const messagesArr = this.state.messages;
		const errorMessage = this.state.error;
		const isLoading = <div className="commitCard isLoading">Loading...</div>;

		let cardData;
		if (errorMessage !== null) {
			cardData = <div>{ errorMessage }</div>
		} else if (messagesArr.length > 0) {
			cardData = commitCard(messagesArr)
		}

		return (
			<div className="gitHubWidgetContainer">
				<div className="verticleTextAlignWrapper widgetTitle">
					<p>GitHub Commits Widget</p>
				</div>
				<div className="commitCardContainer">
					{ messagesArr.length > 0 || errorMessage !== null ? cardData : isLoading }
				</div>
			</div>
		)
	}
};

GitHubWidget.propTypes = {
	userCreds: PropTypes.object
}
