import React from "react";

function HistoryOfNathwani() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center pt-3">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("./../images/SCN_0001.jpg")}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">History Of Nathwani</h1>
            <p>
              Jay Nathwani came to the USA on Nov 14, 1980. Jay started his life in Los Angeles while Kala was in Toronto.
              While visting Toronto, he saw Kala at the <i>Garba</i>. There and then he decided to marry her.  After facing many rejects from Kala, 
              he triumphantly married Kala in Macon, Georgia on July 3, 1988. 
            </p>
          </div>
          <div className="col-lg-5">
            <p>
              Kala and Jay have three childeren together. In chronological order they are: Dhruv, Halley, and Jaylen.
              Dhruv was named after a mythological prince <i>Dhruva</i>.
              In Sanskrit <i>Dhruva</i> means unshakeable, immovable or fixed.  Dhruv got his education 
              at the Pittsburgh University in Biochemistry and Computer Science.
              Their daughter, Halley Radhika, was born in 1995 in Idaho.
              She was named after the Halley's comet which passes earth every 75-76 years.
              Halley Radhika got degrees in Computer Science and Environmental Science from the 
              University of California Berkeley. 
              Jaylen Janak was born in 1998. He got his 
              education in Aerospece Engineering from University of Maryland College Park.
            </p>
            <p>
              Due to work, the Nathwani&apos;s
              have migrated many states, going from California, Ohio, Idaho, Coloroado and finally to Maryland.
            </p>
          </div>
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("./../images/SCN_0050.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryOfNathwani;
