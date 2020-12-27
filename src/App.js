import React from "react";
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import youtube from './api/Youtube';
import './App.css';
import { Search } from "@material-ui/icons";
// import { Router } from "@material-ui/icons";


class App extends React.Component {

  render() {
    return (
      <div className="app">

        <Router>

          <Switch>
            
            <Route path = "/" exact component={HomePage}/>
             

            {/* <Route path = "/search/:searchTerm" exact>
              <div className = "app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route> */}

            <Route path = "/search/:searchTerm" component = {ResultsPage} exact />
            
          </Switch>
        </Router> 

      </div>
    );
  }
}

export default App;
