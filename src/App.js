import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  // const [userEmail, updateUserEmail] = useState({});
  return (
    <div className="App">
      {/* <Login updateUserEmail={updateUserEmail} />
      <Welcome userEmail={userEmail}/> */}
      <Login/>
    </div>
  );
}

export default App;