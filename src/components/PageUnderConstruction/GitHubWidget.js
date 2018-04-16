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
			error: ""
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)
	}

	componentWillMount() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;
		this.fetchGitHub(gitHubProfile, gitHubRepo, this.stateSet)
	}

	stateSet(key,val) {
		this.setState({ [key]:val })
	}

	render() {
		// const cardData = messagesArr.map(curVal => commitCard(curVal))
		
		
		const messagesArr = this.state.messages;
		const isLoading = <div className="commitCard isLoading">Loading...</div>;

		let cardData;
		if (messagesArr.length > 0) {
			console.log('cardData: ', cardData)
			cardData = commitCard(messagesArr)
		}

		return (
			<div className="gitHubWidgetContainer">
				<div className="verticleTextAlignWrapper widgetTitle">
					<p>GitHub Commits Widget</p>
				</div>
				<div className="commitCardContainer">
					{ messagesArr.length > 0 ? cardData : isLoading }
				</div>
			</div>
		)
	}
};

GitHubWidget.propTypes = {
	userCreds: PropTypes.object
}
