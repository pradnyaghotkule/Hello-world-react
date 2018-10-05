import React, {Component} from 'react';
import PersonalDetails from './PersonalDetails';
import ImageComponent from './ImageComponent'


class BatchComponent extends Component {
    render(){
        return(
        <div>
            <ImageComponent profile={this.props.user_info.profile}/>
            <PersonalDetails name={this.props.user_info.name} userName={this.props.user_info.userName}/>
        </div>
      
        );
    }
}

export default BatchComponent;