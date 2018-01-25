import React, { Component } from 'react';
import './Header.css';
const icon = require("././images/bucket-icon-yellow-b.png")

export default class HeaderComponent extends Component {
	constructor() {
		super()
		this.state={}
	}

	render() {
		return (
    <header className="header">
      <img 	className="bucket-logo"
        		src={ icon }
            alt="bucket logo"	/>
      <h1 className="page-title">
        <span className="yellow"><span className="the-b">B</span>ucket</span>
        <span className="un">Un</span>
        <span className="yellow">Limited</span>
      </h1>

    </header>
		)
	}
}