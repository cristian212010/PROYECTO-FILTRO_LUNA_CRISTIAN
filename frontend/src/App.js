import "./App.css";
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Authentication from "./components/authentication/authentication";
import Register from "./components/register/register";
import Loader from "./components/loader/loader";
import Reportes from "./components/reportes/reportes"
import Indicadores from "./components/indicadores-form/indicadores";
import Reportar from "./components/reportar-form/reportar";
import { ChakraProvider } from '@chakra-ui/react'
import RenderAcordion from "./components/ayuda/ayuda";
import EditUser from "./components/editUser/editUser";
import Ayuda from "./components/ayuda/ayuda";
import LoaderInicio from "./components/loader/loader-inicio";

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Switch>
        <Route path='/LoaderInicio' exact component={LoaderInicio}></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/help" exact component={RenderAcordion} />
        <Authentication path="/home" component={Home} />

        <Route path="/loader" exact component={Loader} /> 
        <Route path='/crearIndicadores' component={Indicadores} />
        <Route path='/crearReportes' component={Reportar} />
        <Route path='/help' component={Ayuda} />
        <Authentication path="/reports" component={Reportes} />
        <Route path="/editProfile" exact component={EditUser} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
    </ChakraProvider>
  );
}

export default App;