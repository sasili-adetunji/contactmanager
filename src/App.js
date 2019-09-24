import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className="container">
        <Contact
          name="John Doe"
          email="jdoe@gmail.com"
          phone="08037817325" />
        <Contact
          name="Karen Smith"
          email="ksmith@gmail.com"
          phone="090372873482" />
      </div>
    </div>
  );
}

export default App;
