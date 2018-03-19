import React from 'react';

const GitHubCommitMessage = ({ messagesArr }) => {
	// console.log(messagesArr)
	const cardData = messagesArr.map(i => {

		return (
			<div>
				<div>
					{ i.timeStamp }
				</div>
				<div>
					{ i.message }
				</div>
			</div>
		)
	})

	return (
		<div>
			{ cardData }
		</div>
	)
};

export default GitHubCommitMessage;