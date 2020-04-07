import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Projects from './components/auth/Projects';
// States
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>

          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
          
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
