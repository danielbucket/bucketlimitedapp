import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export const commitsPresenter = (messagesArray,activeStatus,setState) => {
	const viewStatus = activeStatus ? "active" : "inactive";
	const branchNamesArray = messagesArray.map(bName => Object.keys(bName))

	const commitsCardPrint = messagesArray.map(branchObj => {
		const branch = Object.keys(branchObj);

		// generate cards
		const branchCommitCards = branchObj[branch].map(i => {
			return (
				<div className="branchCommitCards"
							key={ i.date }
							onClick={ () => window.open(i.url) }>
					<Moment className="commitTimeStamp">
						{ i.date }
					</Moment>
					<div className="commitMessage">
						{ i.message }
					</div>
				</div>
			)
		})

		// combine cards with corresponding branches
		return branchNamesArray.map((tabName,index) => {
			const cardListViewStatus = viewStatus + " commitsCardList";

			return (
				<div className={ cardListViewStatus }>
					<div>
						{ tabName }
					</div>
					<div>
						{ branchCommitCards }
					</div>
				</div>
			)
		})
	})
	
	// commitsCardPrint is being printed 4 times
	return (
		<div>
			{ commitsCardPrint }
		</div>
	)
}