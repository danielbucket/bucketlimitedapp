import React from 'react';
import Moment from 'react-moment';

const GitHubCommitMessage = ({ messagesArr, error }) => {
	console.log(error.message)

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
				{ cardData }
			</div>
		</div>
	)
};

export default GitHubCommitMessage;