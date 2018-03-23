import React from 'react';

const GitHubCommitMessage = ({ messagesArr }) => {
	const cardData = messagesArr.map((i, curVal) => {
		let commitNum = (messagesArr.length - curVal)

		return (
			<div className="commitCard"
					 key={ i.timeStamp }>
				<div className="verticleTextAlignWrapper">
					<p className="commitNum">
						#{ commitNum }
					</p>
				</div>

				<div className="commitDetails">
					<div className="commitTimeStamp">
						{ i.timeStamp }
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
				{ cardData }
			</div>
		</div>
	)
};

export default GitHubCommitMessage;