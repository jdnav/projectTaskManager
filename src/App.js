import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Projects from './components/projects/Projects';
// States
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
// to set token in header
import tokenAuth from './config/tokenAuth';
// Hihger order component (Route check)
import PrivateRoute from "./components/routes/privateRoute";

// Check whether there is token and set it in headers
const token = localStorage.getItem('token');
if (token) tokenAuth(token);

function App() {

  // console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>

            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                <PrivateRoute exact path="/projects" component={Projects} /> {/* This route is secured */}
              </Switch>
            </Router>

          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
