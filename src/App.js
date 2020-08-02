import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Navbar />
      {/* banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Sci-Fi and Fantasy" fetchUrl={requests.fetchScifiMovies} />
      <Row title="Documentories" fetchUrl={requests.fetchDocumentories} />
    </div>
  );
}

export default App;
