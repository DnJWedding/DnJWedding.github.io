import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background from "./../images/tipNkiss.jpg"

function Home() {
  return (
    <div className="home">
      <div className="container background"  style={{ backgroundImage: `url(${background})` }}>
        <div className="banner">
          <Jumbotron fluid>
            <h1>Purshottam Manji Nathwani</h1>
            <p>welcomes you to the wedding of</p>
            <h2>Jordan Buches and Dhruv Nathwani</h2>
          </Jumbotron>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
