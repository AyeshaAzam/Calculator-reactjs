import React  from 'react';

const ShowResult = ({ changeHandler, calculateResult, selectedOption}) => {
   
        return (
          <div className="resultbox">
                    
                        <div className="type">
                            <label className="label-sum">
                                <input type="radio" name="type" value="sum" checked={selectedOption === 'sum'} 
                                onChange={changeHandler}/>
                                Sum
                            </label>  
                        
                            <label className="label-multi">
                                <input type="radio" name="type" value="multiply"  checked={selectedOption === 'multiply'}  
                                onChange={changeHandler}/>
                                Multiply
                            </label>

                            <label className="result">
                                Result: {calculateResult()} 
                            </label> 
                        </div>        
            </div>   
           
          );
    }

 
export default ShowResult;