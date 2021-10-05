import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background from "./../images/tipNkiss.jpg"

function Home() {
  return (
    <div className="home">
      <div className="container background"  style={{ backgroundImage: `url(${background})` }}>
        <div className="banner">
          <Jumbotron fluid>
            <h2 style={{ "font-family":'Carattere' }}>Purshottam Manji Nathwani</h2>
            <p style={{ "font-family":'Carattere', "font-size": 30 }}>welcomes you to the wedding of</p>
            <h2 style={{ "font-family":'Carattere' }}>Tom and Dana's daughter</h2>
            <h1 style={{ "font-family":'Carattere' }}>Jordan Buches</h1>
            <p style={{ "font-family":'Carattere' }}>and</p>
            <h2 style={{ "font-family":'Carattere' }}>Jay and Kala's son</h2>
            <h1 style={{ "font-family":'Carattere' }}>Dhruv Nathwani</h1>
          </Jumbotron>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
