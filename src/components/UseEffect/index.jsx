import { useState, useEffect } from "react";

export default function Loading() {
  const [user, setUser] = useState({});
  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then(data => data.json())
      .then(response => setUser(response.results[0]))
      .catch(err => console.log(err));
  }
  return <h1>Pending ...</h1>
}
