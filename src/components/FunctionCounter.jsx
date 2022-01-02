import React from "react";

function FunctionCounter() {
      const [number, setNumber] = React.useState(0)
    
      
    const handleIncrease = ()=> {
        setNumber(number + 2);
    };
      const handleDecrease = () => {
        setNumber(number- 2);
      };
      

      return (
        <div className='App'>
        <h1>{number}</h1>
        <button onClick={handleIncrease}>Add Two</button>
        <button onClick={handleDecrease}>Subtract Two</button>
      </div>
      )
       
    }



    export default FunctionCounter;