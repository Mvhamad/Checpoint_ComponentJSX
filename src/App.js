import React from 'react'
import './App.css';
import Address from './Component/Profile/Address.js';
import FullName from './Component/Profile/FullName.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';



const App = () => {
  return (
    <>
      <div className='contener'>
        <div className='App'>
          <div className='profile'>
            <div className='tof'>
              <ProfilePhoto />
            </div>
            <div className='Infos'>
              <span className='title'><b>Identification Card</b></span>
              <FullName />
              <Address />
              <img className='codebar' src="https://images.ctfassets.net/gc4s9mi2asix/1Y9357UiR3nLthDZiLyFYt/9ce50278b2ff6354c1ad8d3471e86404/0eab277c77a978865168725714bfec60.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}


export default App;
