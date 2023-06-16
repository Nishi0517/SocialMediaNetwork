import logo from './logo.svg';
import './App.css';
import Registartion from './components/Registration';
import Login from './components/Login';
import RouterPage from './components/RouterPage';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import RegistrationList from "./components/RegistrationList";
import ArticleList from "./components/ArticleList";
import StaffDashboard from "./components/StaffDashboard"
function App() {
  return (
    <div className="App">
      {/* <RouterPage /> */}
      <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registartion" component={Registartion} />
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/admindashboard" component={AdminDashboard} />
        <Route path="/registartionlist" component={RegistrationList} />
        <Route path="/articlelist" component={ArticleList} />
        <Route path="/staffdashboard" component={StaffDashboard} />
      </Switch>
    </Router>
    </div> 
  );
}

export default App;
