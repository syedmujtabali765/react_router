import { Switch, Route, Link } from "react-router-dom";
import './css/App.css';
import Covid19 from "./components/Covid19";
import Weather from "./components/Weather";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar">
          <li className="navbar-item"><Link exact to="/">HOME</Link></li>
          <li className="navbar-item"><Link to="/covid19">COVID 19</Link></li>
          <li className="navbar-item"><Link to="/weather">WEATHER</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/covid19" component={Covid19} />
        <Route path="/weather" component={Weather} />
      </Switch>
      <footer></footer>
    </>
  );
}

export default App;
