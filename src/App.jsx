import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardHeader from "./component/Dashboard__header";
import LandingPage from "./pages/landing__page/landing__page";
import New from "./pages/get__started/New";
import UserDasboard from "./pages/dashboard/user/User__dashboard";
import AdminDasboard from "./pages/dashboard/admin/Admin__dashboard";
import ShowCase from "./pages/dashboard/user/ShowCase";
import CaseProfile from "./pages/dashboard/user/CaseProfile";
import history from "./history";

import Header from "./component/Header";

import "./dist/style.css";
import "./dist/app.css";
function App() {
  return (
    <div className=' h-screen text-gray-300 '>
      <Router history={history}>
        <Switch>
          <Route
            path='/dashboard/crime/:crimeId'
            exact
            component={CaseProfile}
          />

          <Route path='/dashboard/:param' exact>
            <DashboardHeader />
            <ShowCase />
          </Route>

          <Route path='/dashboard' exact>
            <DashboardHeader />
            <UserDasboard />
          </Route>

          <Route path='/getstarted' exact component={New} />

          <Route path='/' exact>
            <Header />
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
