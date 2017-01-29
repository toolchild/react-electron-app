import './ContentHeader.css';

import React from 'react';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';

export default class ContentHeader extends React.Component {
  
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={this.props.contentHeaderTitle.titles[this.props.contentHeaderTitle.propName]} />
        </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}





