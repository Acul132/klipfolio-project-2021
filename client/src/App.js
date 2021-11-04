import 'App.css';
import Home from 'pages/home.js'
import Visualizations from 'pages/visualization.js';
import Services from 'pages/services.js'
import DataSources from 'pages/data-sources.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/visualizations">
            <Visualizations /> 
          </Route>
          <Route path="/services">
            <Services /> 
          </Route>
          <Route path="/data-sources">
            <DataSources /> 
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
