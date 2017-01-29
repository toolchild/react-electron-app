import './CountryRequestForm.css';

import React from 'react';

import CountryCodeField from './form-fields/CountryCodeField';

export default class CountryRequestForm extends React.Component {
  
  
  render() {
    return (
      <div className="country-request-form">
        <CountryCodeField addCountryCode={this.addCountryCode}/>
      </div>
    );
  }
  
 
  
}





