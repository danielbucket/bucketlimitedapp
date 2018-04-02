import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route } from 'react-router-dom';

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
    this.pgcComponent = this.pgcComponent.bind(this)
  };

  closeModule() {
    const newPopUpBool = this.state.popUpBool;

    if (!newPopUpBool) {
      this.setState({ popUpBool:true })
    } else {
      this.setState({ popUpBool:false })
    }
  }

  pgcComponent({ component: PageUnderConstruction, ...rest }) {



  }

  render() {

    const { popUpBool } = this.state;
    const { businessLogo } = this.props.userCreds;
    const { userCreds } = this.props;


    return (
      <div>
        <Router>
          <Route exact path="/puc"  render={
            () => <PageUnderConstruction popUpBool={ popUpBool }
                                         closeModule={ this.closeModule }
                                         userCreds={ userCreds } />
                              } />
        </Router>
        <div className="App_container">
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