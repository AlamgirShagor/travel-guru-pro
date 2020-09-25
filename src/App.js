import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import fakeData from './components/fakeData/fakeData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hotels from './components/Hotels/Hotels';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className="App">
      <Header></Header>
      <Router>

        <Switch>
          
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/booking/:id">
          <Booking info={fakeData} ></Booking>
        </Route>
        <PrivateRoute path="/hotels/:id">
          <Hotels info={fakeData}></Hotels>
        </PrivateRoute>
        <Route path="/login">          
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router >
      </div>
    </UserContext.Provider>
  );
}

export default App;
