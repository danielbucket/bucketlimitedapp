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
			gitHubProfile: "danielbucket",
			gitHubRepo: "bucketlimitedapp"
			// gitHubProile and gitHubRepo will be passed in as props
			// in future iterations of this app thus keeping
			// PageUnderConstructuction.js modular
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.stateSet = this.stateSet.bind(this)
		this.GitHubCommitMessage = GitHubCommitMessage.bind(this)
	}

	componentWillMount() {
		let profile = this.state.gitHubProfile
		let repo = this.state.gitHubRepo
		const gitHubFetch = this.fetchGitHub(profile, repo, this.stateSet);








		let gitHubUpdate = [];
		if (this.state.messages.length > 1) {
			gitHubUpdate = this.state.messages
		} else {
			gitHubUpdate = [{ timeStamp:Date.now(),  message:"GitHub doesn/'t seem to be connected, bruh." }]
		}
		this.setState({ message:gitHubUpdate })
	}

	stateSet(mes) {
		this.setState({ messages:mes })
	}



	render() {
		const btnImage = this.props.btnImage || "X";
		const { closeModule } = this.props;
		const popUpClass = this.props.popUpBool ? "pucContainer" : "pucContainer popUpInactive";
		const messagesArr = this.state.messages;
		// console.log(messagesArr)



		return (
			<div className={ popUpClass }>

					<button className="closeModuleBtn"
									onClick={ () => closeModule() }>
						{ btnImage }
					</button>

					<div className="statementBox">
						<p>Page Under Construction</p>
						<p>This is my personal webpage and is still very much in the works.</p>
						<p>Please forgive the mess</p>
					</div>

					<GitHubCommitMessage messagesArr={ messagesArr }
															 gitHubProfile={ this.state.gitHubProfile }/>

			</div>
		)
	}
}
