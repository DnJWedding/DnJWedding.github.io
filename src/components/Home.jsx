import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background from "./../images/tipNkiss.jpg"

function Home() {
  return (
    <div className="home">
      <div className="container background"  style={{ backgroundImage: `url(${background})` }}>
        <div className="banner">
          <Jumbotron fluid>
            <div className="row align-items-center">
              <div className="col-sm-12">
                <h2 style={{ "font-family":'Carattere' }}>Purshottam Manji Nathwani</h2>
                <p style={{ "font-family":'Carattere', "font-size": 28 }}>welcomes you to the wedding of</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-5">
                <h3 style={{ "font-family":'Carattere' }}>Tom & Dana's daughter</h3>
                <h1 style={{ "font-family":'Carattere' }}>Jordan Buches</h1>
              </div>
              <div className="col-sm-2">
                <p style={{ "font-family":'Carattere', "font-size": 30 }}>&</p>
              </div>
              <div className="col-sm-5">
                <h3 style={{ "font-family":'Carattere' }}>Jay & Kala's son</h3>
                <h1 style={{ "font-family":'Carattere' }}>Dhruv Nathwani</h1>
              </div>
            </div>
          </Jumbotron>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
