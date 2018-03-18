import React from 'react';
import './css/pageUnderConstruction.css';

const PageUnderConstruction = (ghub={}) => {
	let gitHubUpdate;

	if (ghub === {}) {
		gitHubUpdate = "GitHub not yet connected";
	}

	console.log('PageUnderConstruction: ', gitHubUpdate);

	return (
			<div>
				{ gitHubUpdate }
				<div>
					Page Under Construction Biatch
				</div>
			</div>
	)
}

