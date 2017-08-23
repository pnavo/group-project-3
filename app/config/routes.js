// Include the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/main";
import BarChart from '/children/barChart';
import LineChart from '.../components./components/children/lineChart';
import Dropdowns from '../components/dropdownlist';

// Export the Routes
var routes = (

    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="login" component={login} />
  
        <Route path="parent" component={parent} />
        <IndexRoute component={login} />
      </Route>
    </Router>
);

export default routes;
