import React from "react"
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/main";
import ClosedFemale from '../components/children/closedFemale';
import ClosedMale from '../components/children/closedMale';
import OpenFemale from '../components/children/openFemale';
import OpenMale from '../components/children/openMale';
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
