import React, { Component } from 'react';
import { fetchGitHub } from './fetchGitHub';
import GitHubCommitMessage from './GitHubCommitMessage';
import './css/gitHubWidget.css';
import './css/pageUnderConstruction.css';


export default class PageUnderConstruction extends Component {
	constructor() {
		super()
		this.state = {
			messages:[],
			error: ""
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)
		this.GitHubCommitMessage = GitHubCommitMessage.bind(this)
		this.openNewBrowserTab = this.openNewBrowserTab.bind(this)
	}

	componentWillMount() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;

		this.fetchGitHub(gitHubProfile, gitHubRepo, this.stateSet);
	}

	stateSet(key,val) {
		this.setState({ [key]:val })
	}

	openNewBrowserTab() {
		const { gitHubProfile, gitHubRepo } = this.props.userCreds;
		window.open(`https://github.com/${gitHubProfile}/${gitHubRepo}`)
	}


	render() {
		const btnImage = this.props.btnImage || "X";
		const { closeModule } = this.props;
		const popUpBarrier = this.props.popUpBool ? "popUpBarrier" : "popUpBarrier popUpInactive";
		const { gitHubProfile, gitHubRepo, BTC_address, ETH_address } = this.props.userCreds;
		const messagesArr = this.state.messages

		return (
			<div className={ popUpBarrier }>
				<div className="pucContainer">
						<button className="closeModuleBtn"
										onClick={ () => closeModule() }>
							{ btnImage }
						</button>
						<div className="statementBox">
							<p>Page Under Construction</p>
							<p>This is my personal webpage and is still very much in the works.</p>
							<p>Please forgive the mess.</p>
						</div>

						<GitHubCommitMessage messagesArr={ messagesArr }
																 error={ this.state.error }/>
						<button className="gitHubReopLink"
										onClick={ () => this.openNewBrowserTab() }>
							Check out my GitHub repository
						</button>

						<div className="cryptoCoinAddressContainer">
							<div className="cryptoCoinAddress">
								BTC: { BTC_address }
							</div>
							<div className="cryptoCoinAddress">
								ETH: { ETH_address }
							</div>
						</div>
				</div>
			</div>
		)
	}
}
