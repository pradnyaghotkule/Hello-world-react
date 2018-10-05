import React, { Component } from 'react';
import UserListComponent from './UserListComponent';
import './App.css';

//var  user_info = {
//        profile: './Flower.jpg',
//        name: 'Pradnya Ghotkule',
//        userName:'Pradnya' 
//    }

class App extends Component {
   

    
  render() {
    return (
        <div className="App">
        <h1>
        <UserListComponent/>
        
        {/*        <BatchComponent user_info={user_info}/>*/}
        </h1>
        </div>

    );
  }
}

export default App;
