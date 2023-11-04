import { useState } from "react";
import GoalsList from "./goalsList";

export default function Goals() {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData(prevData => {
        return {...prevData, [e.target.name]: e.target.value}
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="goal" value={formData.goal} onChange={handleChange} type="text" />
        <input name="by" value={formData.by} onChange={handleChange} type="text" />
        <button type="submit">Add Goal</button>
      </form>
      {/* <GoalsList /> */}
    </div>
  );
}
