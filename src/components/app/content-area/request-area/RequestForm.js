import './RequestForm.css';

import React from 'react';

import CountryRequestForm from'./request-form/CountryRequestForm';

export default class RequestForm extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className="request-form">
        <CountryRequestForm/>
      </div>
    );
  }
}





