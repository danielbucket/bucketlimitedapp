import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

const userCreds = {
	gitHubRepo: "bucketlimitedapp",
	gitHubProfile:"danielbucket",
	BTC_address: "1DyXVZpmGRVPvNvsmWYimHeGzKEqxNaZT",
	ETH_address: "0xc097Bbb6CF49d70DAD90149Fc4d932Fc730F1080",
	businessLogo: require('./utils/images/bucket-icon-yellow-b.png')
};

render(
	<Router>
		<Route path="/" render={
					() => <App userCreds={ userCreds } />
				} />
	</Router>
	,
	document.getElementById('root'));
	registerServiceWorker();

App.propTypes = {
	businessLogo: PropTypes.string
}