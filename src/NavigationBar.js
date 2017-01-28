import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {
  
  constructor(props) {
    super(props);
    this.style = {
      margin: 12,
    };
    
    this.fruit = [
      'Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry',
      'Blood Orange', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry', 'Coconut', 'Cranberry', 'Clementine',
      'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape',
      'Grapefruit', 'Guava', 'Honeydew', 'Huckleberry', 'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
      'Kiwi fruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Lychee', 'Nectarine', 'Mango', 'Marion berry', 'Melon',
      'Miracle fruit', 'Mulberry', 'Mandarine', 'Olive', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear',
      'Persimmon', 'Physalis', 'Plum', 'Pineapple', 'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen', 'Quince',
      'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant', 'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash',
      'Salmonberry', 'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine', 'Ugli fruit', 'Watermelon',
    ];
    
  }
  
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton label="Country" style={this.style} buttonStyle={{borderRadius: 0}}/>
          <RaisedButton label="Airport" style={this.style}/>
          <RaisedButton label="Time" style={this.style}/>
          <RaisedButton label="Address" style={this.style}/>
          <RaisedButton label="Config" style={this.style}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <AutoComplete floatingLabelText="Service Address" style={this.style}
                        openOnFocus={true}
                        filter={AutoComplete.caseInsensitiveFilter} maxSearchResults={5} dataSource={this.fruit}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
