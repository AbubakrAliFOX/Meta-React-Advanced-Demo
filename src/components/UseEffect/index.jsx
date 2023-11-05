import { useState, useEffect } from "react";

export default function Loading() {
  const [user, setUser] = useState({});
  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then(data => data.json())
      .then(response => setUser(response.results[0]))
      .catch(err => console.log(err));
  }
  useEffect(() => {
    fetchData();
  }, [])
  return <div>
    <h1>Pending ...</h1>
    <h1>Customer Data</h1>
    <h2>{user.name? user.name.first: 'Person' } {user.name? user.name.last: 'Person' }</h2>
    <img src={user.picture? user.picture.large: ''} alt="Customer Photo" height={250} width={200} />
  </div>
}
