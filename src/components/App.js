import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageUnderConstruction from './PageUnderConstruction/PageUnderConstruction';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      popUpBool: true
    }

    this.closeModule = this.closeModule.bind(this)
  };

  closeModule() {
    const newPopUpBool = this.state.popUpBool;

    if (!newPopUpBool) {
      this.setState({ popUpBool:true })
    } else {
      this.setState({ popUpBool:false })
    }
  }

  render() {
  	const { businessLogo } = this.props;
    const { popUpBool } = this.state;

    return (
      <div>
        <div className="App_container">
        <PageUnderConstruction popUpBool={ popUpBool }
                               closeModule={ this.closeModule }/>
          <Header businessLogo={ businessLogo } />
          <Main />
          <Footer />
        </div>
      </div>
    )
  }
}

App.propTypes = {
	businessLogo: PropTypes.string
}