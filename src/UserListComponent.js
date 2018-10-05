import React from 'react';
import ShowActiveUserList from './ShowActiveUserList';

class UserListComponent extends React.Component {
  render() {
      
    var users = [
         {name:"Pradnya Ghotkule", status:1},
         {name:"ABC", status:0},
         {name:"XYZ", status:1}
        ]
    
    return (
        <div>
        <ShowActiveUserList userList={users}/>
        </div>
    );
  }
}

export default UserListComponent;

