import React, { Component } from 'react';
import { fetchGitHub } from './fetchGitHub';
import GitHubCommitMessage from './GitHubCommitMessage';
import './css/pageUnderConstruction.css';


export default class PageUnderConstruction extends Component {
	constructor() {
		super()
		this.state = {
			messages:[]
		}

		this.fetchGitHub = fetchGitHub.bind(this)
		this.GitHubCommitMessage = GitHubCommitMessage.bind(this)
	}

	componentWillMount() {
		const gitHubFetch = this.fetchGitHub();

		console.log('gitHubFetch: ', gitHubFetch)

		// Michael: the above function is that which is not returning
		// a value. It must be in function itself but I cant see it.
		// Look at fetchGitHub.js for details as to whats happening. 
		// It might have something to do with the function being bound
		// to this class (as seen on line 15)
		// Don't mind the commented out code below. It's not relevant
		// untill fetchGitHub() returns a value.








		// let gitHubUpdate = [];
		// if (this.state.messages.length > 1) {
			// gitHubUpdate = this.state.messages
		// } else {
			// gitHubUpdate = [{ timeStamp:Date.now(),  message:"GitHub not yet connected, bruh." }]
		// }
		// this.setState({ message:gitHubUpdate })
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

					<div className="gitPushLogsContainer">
						<h5>Eventual GitHub Widget</h5>
						<div className="gitPushLogs">
							<GitHubCommitMessage messagesArr={ messagesArr }/>
						</div>
					</div>

			</div>
		)
	}
}
