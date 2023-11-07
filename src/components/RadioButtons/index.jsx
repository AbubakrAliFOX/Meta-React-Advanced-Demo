import { useState } from "react";
import './style.css';
export const RadioGroup = ({ onChange, selected, children }) => {
    // Use React.Children.map and React.cloneElement to clone the children
    // and pass the correct props to each RadioOption
    const RadioOptions = null;
  
    return <div className="RadioGroup">{RadioOptions}</div>;
  };
  
  export const RadioOption = ({ value, checked, onChange, children }) => {
    // Hook up the onChange handler to call the onChange prop passed to RadioGroup
    // Also, make sure to pass the correct checked prop to the input element
    return (
      <div className="RadioOption">
        <input id={value} type="radio" name={value} />
        <label htmlFor={value}>{children}</label>
      </div>
    );
  };

export default function RadioButtons () {
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