import './ContentArea.css';

import React from 'react';
import SplitPane from 'react-split-pane';

import RequestArea from './content-area/RequestArea';

export default class ContentArea extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <SplitPane split='vertical'
                 primary="first"
                 minSize={300}
                 maxSize={800}
                 defaultSize={ parseInt(localStorage.getItem('splitPos'), 10) }
                 onChange={ size => localStorage.setItem('splitPos', size) }
                 className="content-area">
        
        <div className="request-area-pane"><RequestArea contentHeaderTitle={this.props.requestHeaderTitle}/></div>
        
        <div className="response-area-pane">Electron<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Hello</div>
      
      </SplitPane>
    );
  }
}





