import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './css/commitsPresenter.css';

export const commitsPresenter = (messagesArray,activeView,stateSet) => {
	const branchObj = messagesArray.map(branchObject => Object.keys(branchObject));
	const style__branchNamesArray = {
		"display": "grid",
		"grid-template-columns": `repeat(${branchObj.length}, 1fr)`
	};

	const branchNamesArray = messagesArray.map(branch => Object.keys(branch)).map((name,index) => {
		const styleActive__branch_name_tab = { "border": "1px solid green" };
		const styleInactive__branch_name_tab = { "border":"red" };
		const style = activeView.activeStatus ? styleActive__branch_name_tab : styleInactive__branch_name_tab;
		return (
			<div 	style={ style }
						key={ index }
						onClick={ () => stateSet('activeBranch',index) }>
				{ name }
			</div>	
		)
	});

//
	const messagesByBranchArray = messagesArray.map((branch,index) => {
		return branch[branchObj[index]].map(commitCard => {

			const styleActive__branch = {	"display": "grid",
																		"grid-row": `1 / span ${branchObj.length}`};
			const styleInactive_branch = { "display": "none" };
			const viewStyle = activeView.activeStatus ? styleActive__branch : styleInactive_branch;

			return (
				<div style={ viewStyle }
							key={ commitCard.date }
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


	const activeBranchView = activeView.activeBranch
	return (
		<div>
			<div style={ style__branchNamesArray }>
				{ branchNamesArray }
			</div>
			<div>
				{ messagesByBranchArray[activeBranchView] }
			</div>
		</div>
	)
};
