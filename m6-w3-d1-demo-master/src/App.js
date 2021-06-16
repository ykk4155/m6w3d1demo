// import logo from './logo.svg';
import './App.css';
import BarChart from './animatedBar/BarChart';
import SphereApp from './SphereOfSpheres/SphereApp';
import TreeApp from './CollapsibleTree/TreeApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <a className="m-3 btn btn-primary" href="/barChart" rel="noopener noreferrer">
          Bar Chart
        </a>
        <a className="m-3 btn btn-primary" href="/spheres" rel="noopener noreferrer">
          Lightning Spheres
        </a>
        <a className="m-3 btn btn-primary" href="/tree" rel="noopener noreferrer">
          Tree
        </a>
{/* Switch */}
        <Switch>
          <Route exact path="/barChart">
            <BarChart />
          </Route>
          <Route exact path="/spheres">
            <SphereApp />
          </Route>
          <Route exact path="/tree">
            <TreeApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
