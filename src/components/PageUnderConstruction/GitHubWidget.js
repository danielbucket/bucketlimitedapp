import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

import { fetchGitHub } from './fetchGitHub';

export default class GitHubWidget extends Component {
	constructor() {
		super()
		this.state={
			messages: [],
			error: ""
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)

	}

	componentWillMount() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;

		this.fetchGitHub(gitHubProfile, gitHubRepo, this.stateSet);
	}

	stateSet(key,val) {

		this.setState({ [key]:val })
	}

	render() {
		const messagesArr = this.state.messages;
		const isLoading = <div className="commitCard isLoading">Loading...</div>

		const cardData = messagesArr.map((i, curVal) => {
			const commitNum = (messagesArr.length - curVal);

			return (
				<div className="commitCard"
						 key={ i.timeStamp }>
					<div className="verticleTextAlignWrapper">
						<p className="commitNum">
							#{ commitNum }
						</p>22
					</div>

					<div className="commitDetails">
						<div className="commitTimeStamp">
							<Moment>{ i.timeStamp }</Moment>
						</div>
						<div className="commitMessage">
							{ i.message }
						</div>
					</div>
				</div>
			)
		})

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
	userCreds:ProcessingInstruction.isRequired,
	userCreds: PropTypes.object
}
