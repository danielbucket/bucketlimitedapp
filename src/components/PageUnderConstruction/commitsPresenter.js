import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './css/commitsPresenter.css';

export const commitsPresenter = (messagesArray,activeStatus,setState) => {

	const branchObj = messagesArray.map(branchObject => Object.keys(branchObject));
	const messagesByBranchArray = messagesArray.map((branch,index) => branch[branchObj[index]]);

	const branchCommit_tabsWithCommitsList = messagesArray.map((bName,index) => {
		const bNameString = Object.keys(bName).toString();
		const commitsArray = messagesByBranchArray[index].map(commitCard => {
			return (
				<div className="commit_card"
							key={ commitCard.date }
							onClick={ () => window.open(commitCard.url) }>
					<Moment className="commit_time_stamp">
						{ commitCard.date }
					</Moment>
					<div className="commitMessage">
						{ commitCard.message }
					</div>
				</div>
			)
		});
		
		return (
			<div className="commits_by_branch_container"
						key={ Date.now() }>
				<div className="branch_name">
					{ bNameString }
				</div>
				<div className="commits_by_branch_list">
					{ commitsArray }
				</div>
			</div>
		)
	});

	return (
		<div className="branchCommit_tabsWithCommitsList">
			{ branchCommit_tabsWithCommitsList }
		</div>
	)
};
