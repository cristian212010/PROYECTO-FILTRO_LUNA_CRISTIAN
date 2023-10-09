import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Authentication from "./components/authentication/authentication";
import Register from "./components/register/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Authentication path="/inicio" component={Home} />
        <Redirect from="/" to="/inicio" />
      </Switch>
    </Router>
  );
}

export default App;
