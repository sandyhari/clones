import React from 'react';
import './App.css';
import Row from "./commonComponents/Row"

function App() {
  return (
    <>
    <div className="App">

        <h1>its Cloning timing : day #1</h1>
        <h1>Welcome to <span style={{fontFamily:"cursive"}}>MOTUFLIX</span> </h1>
        </div>
        <div>
          <Row title="NETFLIX Originals" />
          <Row title="Trending RightNow" />
          <Row title="Top Rated" />
          <Row title="Action stream" />
          <Row title="Comedy stream" />
          <Row title="Horror stream" />
          <Row title="Romance stream" />
          <Row title="Kids stream" />
          <Row title="Adult stream" />
        </div>
    
    </>
  );
}

export default App;
