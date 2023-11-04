export default function GoalsList({ goals }) {
  return (
    <ul>
      {goals.map((currentGoal) => (
        <li>
          {currentGoal.goal}, by {currentGoal.by}
        </li>
      ))}
    </ul>
  );
}
