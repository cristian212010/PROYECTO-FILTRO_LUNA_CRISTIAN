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
import Loader from "./components/loader/loader";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Authentication path="/home" component={Home} />
        <Route path="/loader" exact component={Loader} /> 
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;