import * as React from "react";
import { useState } from "react";
import "./style.css";
export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = null;

  return (
    <div className="RadioGroup">
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          onChange,
          checked: child.props.value === selected
        });
      })}
    </div>
  );
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
  );
};

export default function RadioButtons() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}
