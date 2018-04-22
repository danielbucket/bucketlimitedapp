import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

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
  }


  render() {
    const { businessLogo } = this.props.userCreds;
    const { userCreds } = this.props;


    return (
      <div>
        <Route exact path="/"  render={
            ({ location, history }) => <PageUnderConstruction userCreds={ userCreds } />
           } />
        <Route to="/home" render={
          () => 
            <div className="App_container">
              <Header businessLogo={ businessLogo } />
              <Main />
              <Footer />
            </div>
        } />
      </div>
    )
  }
}

App.propTypes = {
	businessLogo: PropTypes.string
}