import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const businessLogo = require('./utils/images/bucket-icon-yellow-b.png');

render(<App businessLogo={ businessLogo } />,
	document.getElementById('root'));
	registerServiceWorker();

App.propTypes = {
	businessLogo: PropTypes.string
}