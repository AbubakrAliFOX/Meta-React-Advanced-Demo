import { useState } from "react";
import GoalsList from "./goalsList";

export default function Goals() {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData(prevData => {
        return {...prevData, [e.target.name]: [e.target.value]}
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.goal} type="text" />
        <input onChange={handleChange} value={formData.by} type="text" />
        <button type="submit">Add Goal</button>
      </form>
      {/* <GoalsList /> */}
    </div>
  );
}
