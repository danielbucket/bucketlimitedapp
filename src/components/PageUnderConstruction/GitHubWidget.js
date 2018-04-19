import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchGitHub } from './fetchGitHub';
import { commitsPresenter } from './commitsPresenter';
import './css/gitHubWidget.css';

export default class GitHubWidget extends Component {
	constructor() {
		super()
		this.state = {
			messages: [],
			error: null,
			activeStatus: true
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
		const messagesArr = this.state.messages;
		const errorMessage = this.state.error;
		const activeStatus = this.state.activeStatus;
		const isLoading = <div className="commits_presenter is_loading">Loading...</div>;

		let cardData;
		if (errorMessage !== null) {
			cardData = <div>{ errorMessage }</div>
		} else if (messagesArr.length > 0) {
			cardData = commitsPresenter(messagesArr,activeStatus,this.setState)
		}

		return (
			<div className="git_hub_widget_container">
				<div className="verticle_text_align_wrapper widget_title">
					<p>GitHub Commits Widget</p>
				</div>
				<div className="commits_presenter_container">
					{ messagesArr.length > 0 || errorMessage !== null ? cardData : isLoading }
				</div>
			</div>
		)
	}
};

GitHubWidget.propTypes = {
	userCreds: PropTypes.object
}
