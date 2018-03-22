import React from 'react';

const GitHubCommitMessage = ({ messagesArr }) => {
	const cardData = messagesArr.map((i, curVal) => {
		let commitNum = (messagesArr.length - curVal)

		return (
			<div className="commitCard"
					 key={ i.timeStamp }>
					 #{ commitNum }
				<div className="commitTimeStamp">
					{ i.timeStamp }
				</div>
				<div className="commitMessage">
					{ i.message }
				</div>
			</div>
		)
	})

	return (
		<div  className="gitHubWidgetContainer">
			<h5>GitHub Commits Widget</h5>
			<div className="commitCardContainer">
				{ cardData }
			</div>
		</div>
	)
};

export default GitHubCommitMessage;