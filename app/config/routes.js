// Include the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/main";
import Bar from '../components/children/barChart';
import Line from '../components/children/lineChart';
import Dropdowns from '../components/children/dropdownlist';

// Export the Routes
var routes = (

    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="login" component={login} />
  
        <Route path="homepage" component={homepage} />
        <IndexRoute component={homepage} />
      </Route>
    </Router>
);

export default routes;
