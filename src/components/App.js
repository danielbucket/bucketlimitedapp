import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PageUnderConstruction from './PageUnderConstruction/PageUnderConstruction';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

export default class App extends Component {
  render() {
  	const { businessLogo } = this.props;

    return (
      <div>
        <PageUnderConstruction />
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