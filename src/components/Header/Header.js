import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginModule from '../LoginModule/LoginModule';

import './css/Header.css';
import './css/mediaQuerymax825px.css';
import './css/mediaQuerymax450px.css';

const connectionSVG = require('../images/connection.svg')

export default class HeaderComponent extends Component {
	constructor() {
		super()
		this.state={
      boxSlider: true
    }

    this.stateSet = this.stateSet.bind(this);
	}

  stateSet(key,val) {
    this.setState({ [key]:val })
  }


	render() {
    const { businessLogo } = this.props;
    let sliderBool = this.state.boxSlider;
    let boxSlider = this.state.boxSlider ? "login_box_shiftRight" : "login_box_shiftLeft";

		return (
    <header className="header_container">
      <img className="business_logo"
        		src={ businessLogo }
            alt="bucket logo"	/>
      <h1 className="business_name">
        <span className="the-b">B</span>ucket
        <span className="un">Un</span>
        Limited
      </h1>
      
      <img className="hamburger_menu"
            onClick={ () => this.stateSet("boxSlider", !sliderBool) }
            src={ connectionSVG }/>
      <div className="login_module_container">
        <div className={ boxSlider }>
          <LoginModule boxSlider={ !boxSlider }
                        stateSet={ this.stateSet }/>
        </div>
      </div>
    </header>
		)
	}
};

HeaderComponent.propTypes = {
  businessLogo: PropTypes.string.isRequired
}