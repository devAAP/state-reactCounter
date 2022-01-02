import React from 'react';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
      <ClassCounter/>
      <br></br>
      <FunctionCounter/>  
      </div>
    )
  }
}
  

export default App;
