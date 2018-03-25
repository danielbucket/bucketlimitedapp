import React, { Component } from 'react';
import { fetchGitHub } from './fetchGitHub';
import GitHubWidget from './GitHubWidget';
import './css/gitHubWidget.css';
import './css/pageUnderConstruction.css';


export default class PageUnderConstruction extends Component {
	constructor() {
		super()
		this.state={}
		
		this.openNewBrowserTab = this.openNewBrowserTab.bind(this)
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
		const userCreds = this.props.userCreds;

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

						<GitHubWidget userCreds={ userCreds }/>
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
