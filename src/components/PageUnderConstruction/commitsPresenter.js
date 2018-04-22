import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './css/commitsPresenter.css';

export const commitsPresenter = (messagesArray,activeView,stateSet) => {
	const { activeBranch } = activeView;

	const branchObj = messagesArray.map(branchObject => Object.keys(branchObject));
	const style__branchNamesArray = {
		"display": "grid",
		"grid-template-columns": `repeat(${branchObj.length}, 1fr)`
	};

	const branchNamesArray = messagesArray.map(branch => Object.keys(branch)).map((name,index) => {
		let style;
		if (activeView.activeBranch === index) { style = "branch_tab_active branch_tab" }
		else { style = "branch_tab_inactive branch_tab" }

		return (
			<button className="branch_tab"
							className={ style }
							key={ index }
							onClick={ () => stateSet('activeBranch',index) }>
				{ name }
			</button>	
		)
	});

	const messagesByBranchArray = messagesArray.map((branch,index) => {
		return branch[branchObj[index]].map(commitCard => {
			return (
				<div className="commit_card"
							key={ commitCard.date }
							onClick={ () => window.open(commitCard.url) }>
					<Moment className="commit_timestamp">
						{ commitCard.date }
					</Moment>
					<div className="commit_message">
						{ commitCard.message }
					</div>
				</div>
			)
		})
	});

	return (
		<div className="commits_presenter">
			<div className="branch_name_array"
						style={ style__branchNamesArray }>
					{ branchNamesArray }
			</div>
			<div className="messages_by_branch_array">
				{ messagesByBranchArray[activeBranch] }
			</div>
		</div>
	)
};
