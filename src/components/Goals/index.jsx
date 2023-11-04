import { useState } from "react";
import GoalsList from "./goalsList";

export default function Goals() {
  const [allGoals, setAllGoals] = useState([]);
  const [formData, setFormData] = useState({ goal: "", by: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllGoals((prevGoals) => {
      return [...prevGoals, { goal: e.target[0].value, by: e.target[1].value }];
    });
    clearFrom();
  };
const clearFrom = () => {
    setFormData({ goal: "", by: "" });
}
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          type="text"
        />
        <input
          name="by"
          value={formData.by}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Add Goal</button>
      </form>
      <GoalsList allGoals={allGoals} />
    </div>
  );
}
