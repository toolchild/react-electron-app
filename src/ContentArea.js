import React from 'react';
import SplitPane from 'react-split-pane';
import './ContentArea.css';

export default class ToolbarExamplesSimple extends React.Component {
  
  constructor(props) {
    super(props);
    this.style = {
      margin: 12,
    };
  }
  
  render() {
    return (
      <SplitPane split="vertical" minSize={50}
                 defaultSize={ parseInt(localStorage.getItem('splitPos'), 10) }
                 onChange={ size => localStorage.setItem('splitPos', size) }>
        <div>Hello</div>
        <div>Electron</div>
      </SplitPane>
    );
  }
}








