import './App.css';

import React, {Component} from 'react';
import NavigationBar from './app/NavigationBar'
import ContentArea from './app/ContentArea'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      texts: {
        request: {
          headerTitle: {
            propName: 'country',
            titles: {
              country: 'Request Header Title Country',
              airport: 'Request Header Title Airport'
            },
          }
        },
        response: {
          headerTitle: {
            propName: 'country',
            titles: {
              country: 'Response Header Title Country',
              airport: 'Response Header Title Airport'
            },
          }
          
        }
      }
    };
  }
  
  render() {
    return (
      <div className='App'>
        <NavigationBar/>
        <ContentArea requestHeaderTitle={this.state.texts.request.headerTitle}/>
      </div>
    );
  }
}
export default App;