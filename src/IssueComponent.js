import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';

class IssueComponent extends Component {
  render() {
    return (
        <div className="App">
        
           <HeaderComponent/>
            <MainComponent/>
       
        </div>

    );
  }
}

export default IssueComponent;
