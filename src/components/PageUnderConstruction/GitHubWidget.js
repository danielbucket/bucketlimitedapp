import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchGitHub } from './fetchGitHub';
import { commitsPresenter } from './commitsPresenter';
import './css/gitHubWidget.css';

export default class GitHubWidget extends Component {
	constructor(props) {
		super()
		this.state = {
			messages: [],
			error: null,
			activeStatus: true,
			activeBranch: 0
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)
	};

	componentWillMount() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;
		this.fetchGitHub(gitHubProfile, gitHubRepo, this.stateSet)
	};

	stateSet(key,val) {
		this.setState({ [key]:val })
	};

	render() {
		const repo = this.props.userCreds.gitHubRepo.toString();
		const presenterStateset = this.stateSet;
		const messagesArr = this.state.messages;
		const errorMessage = this.state.error;
		const activeView = {	activeStatus:this.state.activeStatus, 
													activeBranch:this.state.activeBranch	};
		const isLoading = <div className="is_loading">Loading...</div>;

		let cardData;
		if (errorMessage !== null) {
			cardData = <div>{ errorMessage }</div>
		} else if (messagesArr.length > 0) {
			cardData = commitsPresenter(messagesArr,activeView,presenterStateset)
		};

		return (
			<div className="github_widget_container">
				<p className="widget_title">GitHub Commits Widget</p>
				{ messagesArr.length > 0 || errorMessage !== null ? cardData : isLoading }
			</div>
		);
	};
};

GitHubWidget.propTypes = {
	userCreds: PropTypes.object
};
