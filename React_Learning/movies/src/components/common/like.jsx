import React, { Component } from 'react';
class Like extends Component {
    state = {  } 
    render() { 
        
        let classValue=this.props.liked===true?"fa fa-heart":"fa fa-heart-o"
        return (<i 
            onClick={this.props.onClick} 
            className={classValue} 
            style={{cursor:"pointer"}}
            aria-hidden="true">

            </i>);
    }
}
 
export default Like;