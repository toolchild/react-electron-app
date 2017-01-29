import './RequestArea.css';

import React from 'react';
import ContentHeader from './shared/ContentHeader';
import RequestForm from './request-area/RequestForm';

export default class RequestArea extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //
  // }
    
    render()
    {
      return (
        <div className="request-area">
          <ContentHeader contentHeaderTitle={this.props.contentHeaderTitle}/>
          <RequestForm />
        </div>
      );
    }
  }





