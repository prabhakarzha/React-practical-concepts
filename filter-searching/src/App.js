import "./App.css";
import FilterSearch from "./components/FilterSearch";
import List from "./components/List";

// const data = ["sonu", "prabhakar", "rohit", "virat", "dhoni"];
const data = [
  { id: 1, name: "Kartavya", age: 30, location: "delhi" },
  { id: 2, name: "sonu", age: 28, location: "London" },
  { id: 3, name: "ram", age: 32, location: "Paris" },
];

function App() {
  return (
    <div className="App">
      {/* <List data={data} /> */}
      <FilterSearch data={data} />
    </div>
  );
}

export default App;
