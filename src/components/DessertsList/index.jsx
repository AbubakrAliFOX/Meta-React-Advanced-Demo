export default function DessertsList({ desserts }) {
  return (
    <ul>
      {desserts.sort((a, b) => {
        return a.calories - b.calories;
      }).map(dessert => <li>{dessert.name} - {dessert.calories}</li>)}
    </ul>
  );
}
