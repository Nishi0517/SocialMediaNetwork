import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
// import Login from "./Login";
// import Registartion from "./Registration";
// import UserDashboard from "./UserDashboard";
// import AdminDashboard from "./AdminDashboard";
// import RegistrationList from "./RegistrationList";
// import ArticleList from "./ArticleList";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";


export default function RouterPage() {
  return (
    <Router>
      {/* <Switch> */}
        {/* <Route path="/" exact component={Login} />
        <Route path="/registartion" component={Registartion} />
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/admindashboard" component={AdminDashboard} />
        <Route path="/registartionlist" component={RegistrationList} />
        <Route path="/articlelist" component={ArticleList} /> */}
      {/* </Switch> */}
    </Router>
  );
}
