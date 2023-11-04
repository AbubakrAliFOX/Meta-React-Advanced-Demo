import { useState } from "react";

export default function Goals({allGoals}) {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    allGoals = [... allGoals, {goal: e.target[0].value, by: e.target[1].value}];
    console.log(allGoals);
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
    </div>
  );
}
