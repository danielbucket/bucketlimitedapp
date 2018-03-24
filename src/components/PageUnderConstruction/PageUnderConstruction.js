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
			error: "",
			gitHubProfile: "danielbucket",
			projectRepo: "bucketlimitedapp",
			BTC_Address: "1DyXVZpmGRVPvNvsmWYimHeGzKEqxNaZT",
			ETH_Address: "0xc097Bbb6CF49d70DAD90149Fc4d932Fc730F1080"
			// gitHubProile and projectRepo will be passed in as props
			// in future iterations of this app in keeping
			// PageUnderConstructuction.js modular
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)
		this.GitHubCommitMessage = GitHubCommitMessage.bind(this)
		this.openNewBrowserTab = this.openNewBrowserTab.bind(this)
	}

	componentWillMount() {
		const profile = this.state.gitHubProfile
		const repo = this.state.projectRepo

		this.fetchGitHub(profile, repo, this.stateSet);
	}

	stateSet(key,val) {
		this.setState({ [key]:val })
	}

	openNewBrowserTab() {
		window.open(`https://github.com/${this.state.gitHubProfile}/${this.state.projectRepo}`)
	}


	render() {
		const btnImage = this.props.btnImage || "X";
		const { closeModule } = this.props;
		const popUpBarrier = this.props.popUpBool ? "popUpBarrier" : "popUpBarrier popUpInactive";
		const { BTC_Address, ETH_Address } = this.state;
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
								BTC: { BTC_Address }
							</div>
							<div className="cryptoCoinAddress">
								ETH: { ETH_Address }
							</div>
						</div>
				</div>
			</div>
		)
	}
}
