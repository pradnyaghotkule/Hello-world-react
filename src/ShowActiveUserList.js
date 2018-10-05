import React from 'react';

class ShowActiveUserList extends React.Component{
    render(){
        return(
        <ul>
            {
                this.props.userList.filter(function(user){
                    return user.status === 1
                }).map(function(user){
                    return <li>{user.name}</li>
                })
            }
        </ul>
        );
    }
}

export default ShowActiveUserList;