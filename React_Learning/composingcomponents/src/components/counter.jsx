import React, { Component } from 'react';

class  Counter extends Component {
    
    // commenting to check arrow funcrion
    /* 
    constructor(){
        super()
        this.handlingIncrement=this.handlingIncrement.bind(this)
        console.log(this)}*/
    

    render() { 
       // console.log('props-counter',this.props)
        return (
            
             <React.Fragment>
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            {this.props.children}
                        </div>
                        <div class="col-sm">
                            <span style={{fontSize:17}} className={this.ButtonColorMethod()} >{this.props.counter.value}</span>
                        </div>
                        <div class="col-sm">
                                <button className='btn btn-secondary btn-sm' onClick={()=>this.props.handleIncrement(this.props.counter)}>+</button>
                        </div>
                        <div class="col-sm">
                        <button className="btn btn-secondary btn-sm m-2" onClick={()=>this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value===0?"disabled":""} >-</button>
                        </div>
                        <div class="col-sm p-2">
                        <button className="btn btn-danger btn-sm m-2 " onClick={()=>this.props.ondelete(this.props.counter.id)} >x</button>
                        </div>
                    </div>
                    </div>
                
                
                
                
                
                
            </React.Fragment>
        );
    }

    ButtonColorMethod() {
        let buttonColor = "badge badge-";
        buttonColor += this.props.value === 0 ? "warning m-2" : "primary m-2";
        return buttonColor;
    }
    buttonColorMethodDec(){
        let buttonColor="btn btn-secondary btn-sm m-2 " 
        buttonColor += this.props.value === 0 ? "disabled" : "active";
        return buttonColor;
    }
}
 
export default Counter;