import React from "react";
// import Login from "./Login.jsx";
import Form from "./Form";

var userIsRegistered = true;
// var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

// function App() {
//   // const hour = new Date(2020, 4, 1, 15).getHours();
//   return (
//     <div className="container">
//       {
//         isLoggedIn ? <h1>Hello</h1> : <Login />
//         // hour > 12 ? <h1>Why are you still Working?</h1> : null
//         // hour > 12 && <h1>Why are you still Working?</h1>
//       }
//     </div>
//   );
// }

export default App;
