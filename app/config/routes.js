import React from "react"
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/main";
import Bar from '../components/children/barChart';
import Line from '../components/children/lineChart';
import Homepage from '../components/children/homepage'

// Export the Routes
var routes = (

    <Router history={browserHistory}>
      <Route path="/" component={Main}>
  
        <Route path="homepage" component={Homepage} />
        <IndexRoute component={Homepage} />
      </Route>
    </Router>
);

export default routes;
