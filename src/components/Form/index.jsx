import { useState } from "react";
import "./style.css";

import PasswordMsg from "../PasswordMsg";

export default function Form() {
  const [password, setPassword] = useState("");
  const [togglePasswordMsg, setTogglePasswordMsg] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const handleBlur = (e) => {
    console.log(e.target.value);
    setTogglePasswordMsg(!togglePasswordMsg);
  }
  return (
    <>
      <div className="App">
        <form>
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
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className="Field">
              <label htmlFor="password">
                Password <sup>*</sup>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={e => e.target.value.length > 8? null: () => handleBlur}
                id="password"
                placeholder="Password"
              />
              {togglePasswordMsg && <PasswordMsg />}
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
            <button type="submit">
              Create account
            </button>
            {/* {disabled={!getIsFormValid()}} */}
          </fieldset>
        </form>
      </div>
    </>
  );
}
