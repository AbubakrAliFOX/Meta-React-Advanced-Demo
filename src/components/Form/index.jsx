import { useState } from "react";
import './style.css'


export default function Form() {

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
              <input id="firstname" placeholder="First name" />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input placeholder="Last name" />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input placeholder="Email address" />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input placeholder="Password" />
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select>
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
