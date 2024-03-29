import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <Provider>
      <Router>
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Contacts}/>
            <Route exact path='/contact/add' component={AddContact}/>
            <Route exact path='/contact/edit/:id' component={EditContact}/>

            <Route exact path='/about' component={About}/>
            <Route component={NotFound}/>

          </Switch>
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
