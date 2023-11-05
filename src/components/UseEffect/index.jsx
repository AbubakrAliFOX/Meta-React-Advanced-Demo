import { useState, useEffect } from "react";

export default function Loading() {
  const [user, setUser] = useState({});
  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then((data) => data.json())
      .then((response) => setUser(response.results[0]))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return Object.keys(user).length > 0 ? (
    <div>
      <h2>Customer Data</h2>
      <h3>
        {user.name ? user.name.first : "Person"}{" "}
        {user.name ? user.name.last : "Person"}
      </h3>
      <img
        src={user.picture ? user.picture.large : ""}
        alt="Customer Photo"
        height={250}
        width={200}
      />
    </div>
  ) : (
    <img src="1488.gif" alt="Pending GIF" />
  );
}
