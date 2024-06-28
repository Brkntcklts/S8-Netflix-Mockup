import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Header from "./conponents/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Switch>
      <Route exact path="/">
        <h1>Welcome to Netflix</h1>
      </Route>
      <Route path="/home">
        <Header />
        <Home />
      </Route>
      <Route exact path="/login">
      <Header/>
        <Login />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      </Switch>
     <div className="dev-navigation">
      <Link to="/">HomePAge</Link>
      <Link to="/login">Login</Link>
      <Link to="/welcome">Welcome</Link>
      <Link to="/home">Home</Link>
     </div>
        
    </>
  );
}

export default App;
