import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background from "./../images/tipNkiss.jpg"

function Home() {
  return (
    <div className="home">
      <div className="container background"  style={{ backgroundImage: `url(${background})` }}>
        <div className="banner">
          <Jumbotron fluid>
            <h1>Purshottam Manji Nathwani welcomes you</h1>
            <p>to the wedding of Jordan Buches and Dhruv Nathwani</p>
          </Jumbotron>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
