import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './css/commitsPresenter.css';

export const commitsPresenter = (messagesArray,activeView,stateSet) => {
	const activeBranchView = activeView.activeBranch

	const branchObj = messagesArray.map(branchObject => Object.keys(branchObject));
	const style__branchNamesArray = {
		"display": "grid",
		"grid-template-columns": `repeat(${branchObj.length}, 1fr)`
	};

	const branchNamesArray = messagesArray.map(branch => Object.keys(branch)).map((name,index) => {
		const styleActive__branch_name_tab = { "border": "1px solid green" };
		const styleInactive__branch_name_tab = { "border":"1px solid red" };

		let style;
		if (activeView.activeBranch === index) {
			style = styleActive__branch_name_tab
		} else {
			style = styleInactive__branch_name_tab
		}

		return (
			<div 	className="active_branch"
						style={ style }
						key={ index }
						onClick={ () => stateSet('activeBranch',index) }>
				{ name }
			</div>	
		)
	});

//
	const messagesByBranchArray = messagesArray.map((branch,index) => {
		return branch[branchObj[index]].map(commitCard => {
			return (
				<div key={ commitCard.date }
							onClick={ () => window.open(commitCard.url) }>
					<Moment className="commit_time_stamp">
						{ commitCard.date }
					</Moment>
					<div className="commit_message">
						{ commitCard.message }
					</div>
				</div>
			)
		})
	});


		// <div className="commits_presenter">
	return (
		<div className="commits_presenter">
			<div style={ style__branchNamesArray }>
				{ branchNamesArray }
			</div>
			<div>
				{ messagesByBranchArray[activeBranchView] }
			</div>
		</div>
	)
};
