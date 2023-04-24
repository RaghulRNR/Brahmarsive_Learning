
import React, { Component } from 'react';
import './App.css';
import './components/counters'
import './components/navbar'
import Counters from './components/counters';
import NavBar from './components/navbar';
class App extends Component {
  state = { counters:[
    {id:1,value:4},
    {id:2,value:0},
    {id:3,value:0},
    {id:4,value:0},
],
} 

handleReset=()=>{
    const counter=this.state.counters.map(c=>
        {c.value=0
        return c})

    this.setState({counter})
        
}
handledelete=(counterID)=>{
    console.log(counterID)
    const counters=this.state.counters.filter(c=>c.id !== counterID)
    
    this.setState({counters:counters})
    console.log("delete")
}

handlingIncrement=(counter)=>{
    const counters=[...this.state.counters]
    const index=counters.indexOf(counter)
    counters[index].value++  
    this.setState({counters})
}
handleDecrement = (counter)=>{
  console.log(counter)
  const counters=[...this.state.counters]
  const index=counters.indexOf(counter)
  counters[index].value-=1
  this.setState({counters:counters})
}
render(){
  return (
    <div className="App">
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <Counters 
      counters={this.state.counters}
      OnReset={this.handleReset}
      onIncrement={this.handlingIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handledelete}
      />

    </div>
  );
}
}
 
export default App;