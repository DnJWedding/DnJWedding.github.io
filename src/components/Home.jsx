import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="banner">
          <Jumbotron fluid>
            <h1>Purshottam Manji Nathwani welcomes you to</h1>
            <p>
                the wedding of Jordan Buches and Dhruv Nathwani
            </p>
          </Jumbotron>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
