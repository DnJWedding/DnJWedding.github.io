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
            <p style={{ "font-family":'Carattere', "font-size": 26 }}>welcomes you to</p>
            <h1 style={{ "font-family":'Carattere' }}>Jordan Buches' and Dhruv Nathwani's Wedding</h1>
          </Jumbotron>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
