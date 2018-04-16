import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


export const commitCard = commit => commit.map(i => {
	console.log(i)
			return (
				<div className="commitCard"
						 key={ i.date }
						 onClick={ () => window.open(i.url) }>
					<div className="verticleTextAlignWrapper">
						<p className="branchName">
							{ i.branchName }
						</p>
					</div>
					<div className="commitDetails">
						<div className="commitTimeStamp">
							<Moment>{ i.date }</Moment>
						</div>
						<div className="commitMessage">
							{ i.message }
						</div>
					</div>
				</div>
			)
		})



