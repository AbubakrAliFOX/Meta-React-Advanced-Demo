import { useState } from "react";
import "./style.css";

import PasswordMsg from "../PasswordMsg";
import { validateEmail } from "../utlis";

export default function Form() {
  const [password, setPassword] = useState({value: '', isTouched: false});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("role");
  const handleBlur = (e) => {
    if (e.target.value.length < 8) {
      console.log(e.target.value);
      setTogglePasswordMsg((old) => !old);
    }
  };
  const getIsFormValid = () => {
    return (
      role != "role" && password.value.length > 8 && firstname && validateEmail(email)
    );
  };
  const clearForm = () => {
    setRole("role");
    setEmail("");
    setLastname("");
    setFirstname("");
    setPassword({... password, value:'', isTouched: false});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label htmlFor="firstname">
                First name <sup>*</sup>
              </label>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                id="firstname"
                placeholder="First name"
              />
            </div>
            <div className="Field">
              <label htmlFor="lastname">Last name</label>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                id="lastname"
                placeholder="Last name"
              />
            </div>
            <div className="Field">
              <label htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => {
                  console.log(validateEmail(e.target.value));
                }}
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className="Field">
              <label htmlFor="password">
                Password <sup>*</sup>
              </label>
              <input
                value={password.value}
                onChange={(e) => setPassword({...password, value: e.target.value})}
                onBlur={() => setPassword({...password, isTouched: true})}
                id="password"
                placeholder="Password"
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordMsg />
              ) : null}
            </div>
            <div className="Field">
              <label htmlFor="role">
                Role <sup>*</sup>
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="role"
              >
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button disabled={!getIsFormValid()} type="submit">
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
