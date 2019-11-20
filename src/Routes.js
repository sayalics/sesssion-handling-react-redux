import React from 'react';
import { Switch, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './Components/RouteWithLayout/index';
// import {AuthenticatedRoute} from './Components/AuthenticatedRoute/index';
// import {UnauthenticatedRoute} from './Components/UnauthenticatedRoute/index';
import { DriveLayout , MinimalLayout  } from './Layout/index';
import {Provider} from "react-redux";
import store from './Store';
import {
  MyDrive as MyDriveView,
  Shared as SharedView,
  Recent as RecentView,
  Trash as TrashView,
  SignUp as SignUpView,
  SignIn as SignInView,
} from './Views/index';
import jwt_decode from "jwt-decode";
import setAuthToken from './Utils/SetAuthToken';
import { setCurrentUser, logoutUser } from "./Actions/AuthActions";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const Routes = (appProps) => {
   
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Redirect
          exact
          from="/"
          to="/signin"
          />
          
          <PrivateRoute
            component={MyDriveView}
            exact
            layout={DriveLayout}
            path="/mydrive"
            appProps={appProps}
          />
          <PrivateRoute
            component={SharedView}
            exact
            layout={DriveLayout}
            path="/shared"
            appProps={appProps}

          />
          <PrivateRoute
            component={RecentView}
            exact
            layout={DriveLayout}
            path="/recent"
            appProps={appProps}

          />
        
          <PrivateRoute
            component={TrashView}
            exact
            layout={DriveLayout}
            path="/trash"
            appProps={appProps}

          />
          <RouteWithLayout
            component={SignUpView}
            exact
            layout={MinimalLayout}
            path="/signup"
            appProps={appProps}

          />
          <RouteWithLayout
            component={SignInView}
            exact
            layout={MinimalLayout}
            path="/signin"
            appProps={appProps}

          /> 
          
          </Switch>
        </BrowserRouter>
      </Provider>
  ); 
  
};

export default withRouter(Routes);