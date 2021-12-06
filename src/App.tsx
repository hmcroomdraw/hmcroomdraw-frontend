import React, {useState} from 'react';
import './App.css';
import ImageMapper from 'react-img-mapper';
import SignIn from "./components/SignIn";
import MapDisplay from "./components/MapDisplay";

function App() {
    const [signedIn, setSignedIn] = useState('');

    function handleClick(user: string) {
        setSignedIn(user);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>HMC ROOM DRAW </h1>
          <div>
          {signedIn === '' ?
              <SignIn onClick={handleClick}></SignIn>
              :
              <MapDisplay user={signedIn} onClick={handleClick}></MapDisplay>
          } </div>

      </header>
    </div>
  );
}

export default App;