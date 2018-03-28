import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginModule from '../LoginModule/LoginModule';

import './css/Header.css';
import './css/mediaQuerymax825px.css';
import './css/mediaQuerymax450px.css';

export default class HeaderComponent extends Component {
	constructor() {
		super()
		this.state={}
	}


	render() {
    const { businessLogo } = this.props;

		return (
    <header className="header_container">
      <img 	className="business_logo"
        		src={ businessLogo }
            alt="bucket logo"	/>
      <h1 className="business_name">
        <span className="the-b">B</span>ucket
        <span className="un">Un</span>
        Limited
      </h1>

      <LoginModule />
    </header>
		)
	}
};

HeaderComponent.propTypes = {
  businessLogo: PropTypes.string.isRequired,
  businessLogo: PropTypes.string
}