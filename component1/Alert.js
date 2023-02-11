import React from 'react';

export default function Alert(props){
    const capitalize =(word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        //assigned particular height to alert so that this much height is occupied by the alert tag so that we dont have to face the problem of cls(cumulative layout shift) that is shifting of the main box
        <div style={{height:'10px'}}> 
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>}
        </div>
    )
}