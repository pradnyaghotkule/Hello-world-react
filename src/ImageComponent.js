import React from 'react';

const ImageComponent = (props) => {
    
    return (
        <div>
         <img src={props.profile} className="App-logo" alt="profile" />
        </div>
    );
  
}

export default ImageComponent;
