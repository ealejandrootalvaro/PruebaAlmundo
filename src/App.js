import React, { Component } from 'react';
import './App.css';

import Header from './components/layouts/Header'
import Main from './components/layouts/Main'

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <div id="main">

            <Main />
          
        </div>

      </div>


    )
  }
}

export default App;
