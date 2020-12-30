import React from "react";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ResultsPage from './pages/ResultsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="app">

        <Router>
          <Switch>
            
            <Route path = "/" exact component={LoginPage}/>
            
            <Route path = "/homepage" exact component={HomePage}/>

            <Route path = "/search/:searchTerm" component = {ResultsPage} exact />
            
          </Switch>
        </Router> 

      </div>
    );
  }
}

export default App;
