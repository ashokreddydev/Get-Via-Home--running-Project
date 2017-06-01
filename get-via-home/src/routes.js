// src/routes.js
import React from 'react';
import { Router, Route} from 'react-router'



import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Registration from './Components/Registration';


//Admin Pages
import Dashboard from './Components/AdminDashboard/Dashboard';
import AdminAddProject from './Components/AdminDashboard/AddProject';
import AdminManageProject from './Components/AdminDashboard/ManageProject';
import AdminManageProjectContactDetails from './Components/AdminDashboard/ManageProjectContactDetails';
import AdminManageUsers from './Components/AdminDashboard/ManageUsers';
import AdminContactRequest from './Components/AdminDashboard/ContactRequest';
import AdminManageProjectsView from './Components/AdminDashboard/ManageProjectsView';





import User_Dashboard from './Components/UserDashboard/Dashboard';

import BrowseProjects from './Components/UserDashboard/BrowseProjects';
import ViewSelectedProjects from './Components/UserDashboard/ViewSelectedProjects';
import ViewInvestedProjects from './Components/UserDashboard/ViewInvestedProjects';
import ViewContactedProjects from './Components/UserDashboard/ViewContactedProjects';
import ManageContactRequests from './Components//UserDashboard/ManageContactRequests';
import Profile from './Components/UserDashboard/Profile';
import RequestProject from './Components/UserDashboard/RequestProject';
import AdminNotifications from './Components/AdminDashboard/Notifications';








const Routes = (props) => (
  <Router {...props}>
     <Route path="/" component={Login} />
     <Route path="/Registration" component={Registration} />
     <Route path="/Dashboard" component={Dashboard} />
    <Route path="/AdminAddProject" component={AdminAddProject} />
    <Route path="/AdminManageProject" component={AdminManageProject} />
    <Route path="/AdminManageProjectContactDetails" component={AdminManageProjectContactDetails} />
    <Route path="/AdminManageUsers" component={AdminManageUsers} />
    <Route path="/AdminNotifications" component={AdminNotifications} />
    <Route path="/AdminContactRequest" component={AdminContactRequest} />
    <Route path="/AdminManageProjectsView" component={AdminManageProjectsView} />
    
    
    
     <Route path="/UserDashboard" component={User_Dashboard} />
    <Route path="/browseprojects" component={BrowseProjects} />
    <Route path="/ViewSelectedProjects" component={ViewSelectedProjects} />
    <Route path="/ViewInvestedProjects" component={ViewInvestedProjects} />
    <Route path="/ViewContactedProjects" component={ViewContactedProjects} />
    <Route path="/ManageContactRequests" component={ManageContactRequests} />
    <Route path="/Profile" component={Profile} />
    <Route path="/RequestProject" component={RequestProject} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
