import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="App">
      <h1>Random User Cards</h1>
      <input
        type="text"
        className="search-box"
        onInput={filterCards}
        placeholder="Search..."
        onKeyPress={(event) =>
          (event.charCode >= 65 && event.charCode <= 90) ||
          (event.charCode >= 97 && event.charCode <= 122)
        }
      />
      <div className="cards-container">
        {users.map((user, index) => (
          <Card key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
