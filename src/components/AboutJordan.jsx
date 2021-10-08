import React from "react";

function AboutJordan() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("./../images/17309514_1844561125785050_1812644349307815458_n - Copy - Copy.jpg")}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About Jordan</h1>
            <p>
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutJordan;
