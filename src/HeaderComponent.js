import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import NavigationComponent from './NavigationComponent';
import SearchComponent from './SearchComponent';

class HeaderComponent extends Component {
  render() {
    return (
        <div>
              <LogoComponent/>
              <NavigationComponent/>
            <SearchComponent/>
        </div>

    );
  }
}

export default HeaderComponent;
