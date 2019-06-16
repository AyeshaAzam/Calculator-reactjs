import React  from 'react';
import './box.css';


const Box = ({name ,placeholder ,value ,onChange ,label}) => {

        return (
                <div className="box">
                   <label for="user-input" className="boxL">{label}</label>
                    <input id="user-input" className="boxInput"
                    type="number" 
                    name={name} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    />                    
                </div>

          );
    
}
 
export default Box;