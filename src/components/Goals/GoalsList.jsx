export default function GoalsList({ allGoals }) {
  return (
    <ul>
      {allGoals.map((currentGoal) => (
        <li>
          {currentGoal.goal}, by {currentGoal.by}
        </li>
      ))}
    </ul>
  );
}
