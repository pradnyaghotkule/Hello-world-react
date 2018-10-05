import React from 'react';

class ShowTaskList extends React.Component {
  render() {
    return (
        <ul>
        {
            this.props.tasks.map(function (task){
                return <li>{task}</li>
                })
        }
        </ul>
    );
  }
}

export default ShowTaskList;

