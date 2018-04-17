import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export const commitCard = commit => {
	return commit.map(branchObj => {
		const branch = Object.keys(branchObj)

		return branchObj[branch].map(i => {
			const classNames = branch + ' burp'
		
			return (
				<div className={ classNames }>
					<Moment>
						{ i.date }
					</Moment>
					<div>
						{ i.message }
					</div>
				</div>
			)
		})
	})
}