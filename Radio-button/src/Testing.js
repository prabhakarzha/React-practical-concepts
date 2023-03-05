import { useState } from "react";

function Testing() {
  const [email, setEmail] = useState();

  const handleInput = (e) => setEmail(e.target.value);

  return <input type="text" value={email} onChange={handleInput} />;

}
export default Testing;
// import { useState } from "react";

// function Testing() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
//       <button onClick={() => setCount((count) => count + 1)}>Click me</button>
//     </div>
//   );
// }
// export default Testing;
