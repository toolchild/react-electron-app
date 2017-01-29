import './RequestArea.css';

import React from 'react';
import ContentHeader from './shared/ContentHeader'

export default class ResponseArea extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className="response-area">
        <ContentHeader contentHeaderTitle={this.props.contentHeaderTitle}/>
      </div>
    );
  }
}





