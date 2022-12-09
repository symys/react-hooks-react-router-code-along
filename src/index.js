// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);







// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";


// /* Add basic styling for NavLinks */
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// /* define the NavBar component */
// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//         exact
//         /* add styling to Navlink */
//         style={linkStyles}
//         /* add prop for activeStyle */
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/messages"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Messages
//       </NavLink>
//       <NavLink
//         to="/signup"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         SignUp
//       </NavLink>
//     </div>
//   );
// }




// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div>
//       <h1>This is my signup component!</h1>
//     </div>
//   );
// }

// function Messages() {
//   return (
//     <div>
//       <h1>This is my messages component!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// ReactDOM.render(
//   <BrowserRouter>
//   <NavBar />
//     <Switch>
//       <Route path="/about">
//         <About />
//       </Route>
//       <Route path="/login">
//         <Login />
//       </Route>
//       <Route path="/messages">
//         <Messages />
//       </Route>
//       <Route path="/signup">
//         <SignUp />
//       </Route>
//       <Route exact path="/">
//         <Home />
//       </Route>
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// function App() {
//   return <Home />;
// }

// ReactDOM.render(<App />, document.getElementById("root"));
