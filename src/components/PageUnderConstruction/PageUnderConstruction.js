import React, { Component } from 'react';
import { fetchGitHub } from './fetchGitHub';
import gitHubCommitMessage from './gitHubCommitMessage';
import './css/pageUnderConstruction.css';


export default class PageUnderConstruction extends Component {
	constructor() {
		super()
		this.state = { messages:[] }

		this.fetchGitHub = fetchGitHub.bind(this)
	}

	componentWillMount() {

		this.setState({ messages:this.fetchGitHub() })
		console.log("this.state: ", this.state )
	}




	render() {
		const gitHubUpdate = this.props.ghub || "GitHub not yet connected, bruh.";
		const btnImage = this.props.btnImage || "X";
		const { closeModule } = this.props;
		const popUpClass = this.props.popUpBool ? "pucContainer" : "pucContainer popUpInactive";

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
							{ gitHubUpdate }
						</div>
					</div>

			</div>
		)
	}
}
