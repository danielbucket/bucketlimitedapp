import React, { Component, Proptypes } from 'react';
import LoginModule from '../LoginModule/LoginModule';
import './css/HeaderRoot.css';

// const icon = require("././images/bucket-icon-yellow-b.png");

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
}