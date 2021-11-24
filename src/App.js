import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import Home from './pages/Home';
import HomeTeller from './pages/HomeTeller';
import SignIn from './pages/SignIn';
import History from './pages/History';
import Request from './pages/Request';
import Profile from './pages/Profile';
import CommunityOfficer from './pages/CommunityOfficer';
import AddCommunityOfficer from './pages/AddCommunityOfficer';
import DetailCo from './pages/DetailCo';

function App() {
  let isLogin;

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/hometeller">
          <HomeTeller />
        </Route>

        <Route exact path="/history">
          <History />
        </Route>

        <Route exact path="/request">
          <Request />
        </Route>

        <Route exact path="/communityofficer">
          <CommunityOfficer />
        </Route>

        <Route exact path="/addCommunityOfficer">
          <AddCommunityOfficer />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/detailcommunityofficer">
          <DetailCo />
        </Route>

        <Route path="/signin">
          <SignIn isLogin={isLogin} />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
