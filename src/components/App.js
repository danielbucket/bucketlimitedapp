import React, { Component } from 'react';
import style from './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App_container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
