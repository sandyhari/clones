import React from 'react';
import './App.css';
import Banner from './Banner';
import Row from "./commonComponents/Row"
import Navbar from './Navbar';
import requests from "./requests";

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
        <Banner />
          <Row title="NETFLIX Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
          <Row title="Trending RightNow" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action stream" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy stream" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror stream" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance stream" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Kids stream" fetchUrl={requests.fetchKidsMovies}/>
          {/* <Row title="Adult stream" fetchUrl={requests.fetchAdultMovies}/> */}
        </div>
    </>
  );
}

export default App;
