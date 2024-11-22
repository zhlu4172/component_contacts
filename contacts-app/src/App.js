import React from 'react';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
      </header>
      <main>
        <ContactList />
      </main>
    </div>
  );
}

export default App;
