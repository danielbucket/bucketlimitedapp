import React, { Component, Proptypes } from 'react';
import style from './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
  	const { businessLogo } = this.props;

    return (
      <div className="App_container">
        <Header businessLogo={ businessLogo }/>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
