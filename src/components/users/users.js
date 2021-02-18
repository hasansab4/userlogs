import React from 'react';
import {User} from '../styledcomponents/styledcomponents';
const users = (props) =>{
    let firstChar = props.user.split(' ')[0].charAt(0) || "";
    let secondChar = (props.user.split(' ')[1])? props.user.split(' ')[1].charAt(0): "";
    let user = firstChar + secondChar;
    
    return (
      <User onClick={props.clicked}>
        <p>{user}</p>
        <p>{props.user}</p>
      </User>
    );
}
export default users;