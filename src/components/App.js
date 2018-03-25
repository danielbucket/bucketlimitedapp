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

    const { popUpBool } = this.state;
    const { businessLogo } = this.props.userCreds;
    const { userCreds } = this.props;


    return (
      <div>
        <div className="App_container">
        <PageUnderConstruction popUpBool={ popUpBool }
                               closeModule={ this.closeModule }
                               userCreds={ userCreds }/>
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