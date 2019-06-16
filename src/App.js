import React, { Component } from 'react';
import './App.css';
import Box from './components/box';
import ShowResult from './components/resultBox';

class App extends Component {

  state = {
    value1: '',
    value2: '',
    value3: '',
    type:'sum',
  }

  onChangeHandler = (e) => {
     if(e.target.name === 'type'){
       this.setState({ [e.target.name]: e.target.value})
     } else {
       this.setState({ [e.target.name]: parseFloat(e.target.value) })
     }
  }

 calculateResult = () => {
    let result = 0;
    let {value1, value2, value3 } = this.state

    if(this.state.type === 'sum'){ 
      result = value1 + value2 + value3
    } else {
      result = value1 * value2 * value3
    }
    return result
 }
    

  render(){
    return (
      <div className="wrapper">
          <Box   label='Value 1:'  name='value1' value= {this.state.value1} onChange={this.onChangeHandler}/>
          <Box   label='Value 2:'  name='value2' value= {this.state.value2} onChange={this.onChangeHandler}/>
          <Box   label='Value 3:'  name='value3' value= {this.state.value3} onChange={this.onChangeHandler}/>
          <ShowResult 
            changeHandler= {this.onChangeHandler}
            calculateResult= {this.calculateResult}
            selectedOption= {this.state.type}/>
      </div>
        
     
    );
  }
  }
 

export default App;
