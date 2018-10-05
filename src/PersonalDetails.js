import React, { Component } from 'react';

class PersonalDetails extends Component {
  render() {
    return (
        <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Username : {this.props.userName}</h2>
        </div>
    );
  }
}

export default PersonalDetails;
