import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CaroGameStart from '../containers/CaroGameStart';
import Header from './Header';
import Footer from './Footer/Footer';
import '../Game.css';
import {LoginView}  from './Login/Login';
import SignupView from './Signup/SignupView';
// import Game from'./Game';
/* eslint-disable */
const App = () => (
      <Router>
        <Switch>
          <Route path="/login" component={LoginView}/>
          <Route path='/signup'>
            <SignupView />
          </Route>
          <Route path="/">
            <div>
              <Header />
              <CaroGameStart />
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>


)

export default App;
