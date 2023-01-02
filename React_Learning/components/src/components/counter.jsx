import React, { Component } from 'react';
class  Counter extends Component {
    state={
        Count:1,
        imageurl:'https://picsum.photos/200',
        list:['tag1','tag2','tag3']
    }
    // commenting to check arrow funcrion
    /* 
    constructor(){
        super()
        this.handlingIncrement=this.handlingIncrement.bind(this)
        console.log(this)}*/
    
    renderTags(){
        if(this.state.list.length === 0 ) return <h1>The List is empty</h1>
        return <ul >{this.state.list.map(list =><li key={list}>{list}</li>)}</ul>
    
    
    }
    
    handlingIncrement=()=>{
        console.log('Increment CLicked')
        console.log(this)
        this.setState({Count:this.state.Count+1})
    }

    render() { 
         
        return (
            
             <React.Fragment>
           
            <span style={{fontSize:17}} className={this.ButtonColorMethod()} >{this.state.Count}</span>
            <button className='btn btn-secondary btn-sm' onClick={this.handlingIncrement}>Increment</button>
            {this.state.list.length === 0 && <h1>please create new Tag</h1>}
            {this.renderTags()}
            </React.Fragment>
        );
    }

    ButtonColorMethod() {
        let buttonColor = "badge badge-";
        buttonColor += this.state.count === 0 ? "warning m-2" : "primary m-2";
        return buttonColor;
    }
}
 
export default Counter;