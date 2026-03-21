import "./App.css";
import { Users } from "./users";
import { useState } from "react";
import Table from "./Table";
import Todo from "./Todo";

function App() {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const keys = ["first_name", "last_name", "email"];
  console.log(Users[0]["email"]);

  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query)),
      // alternate way to searching
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className="App">
      <Todo />
      <br />
      <br />
      {/* <input
        type="text"
        placeholder="search..."
        className="search"
        // onChange={(e) => setQuery(e.target.value)}
        onChange={handleChange}
      />
      <Table data={search(Users)} /> */}
    </div>
  );
}

export default App;
