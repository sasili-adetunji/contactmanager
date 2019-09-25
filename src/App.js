import React from 'react';
import './App.css';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context';
import AddContact from './components/contact/AddContact';
function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
