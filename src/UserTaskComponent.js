import React from 'react';
import ShowTaskList from './ShowTaskList';

class UserTaskComponent extends React.Component {
  render() {
      
    var userName = "Pradnya Ghotkule",
        tasks = ['creating react poc', 'task 2','task 3'];
   
    return (
         <div>
            <h1>Task Created By:  {userName}</h1>
        <hr/>
            <ShowTaskList tasks={tasks}/>
        </div>
    );
  }
}

export default UserTaskComponent;

