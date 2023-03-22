import React from 'react';
// import logo from './logo.svg';
import './App.css';

import rose from './pngwing.com.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>💞 &nbsp; 💞 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💞 &nbsp; 💞</p>
        <p>💞 С Днём Рождения, 💞</p>
        <p>💞 солнышко!!! 💞</p>
        <p>💞</p>

        <img src={rose} className="rose"/>
        <div className="ps">Любимой от любимого /\/</div>
      </div>
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
