import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import ContentArea from './ContentArea'


import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();





class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar/>
        <ContentArea/>
      </div>
    );
  }
}

export default App;
