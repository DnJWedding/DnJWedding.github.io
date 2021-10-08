import React from "react";

function Mendhi() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center pt-3">
          <div className="col-lg-12">
            <h1 className="font-weight-light">Pre-Wedding Rituals</h1>
          </div>
          <div className="col-lg-12">
            <h2 className="font-weight-light"><i>Ganesh Sthpna</i></h2>
            <p>
              Like most of the Hindu traditions, the beginning of a Gujarati wedding is marked with the worship of <i>Ganesh</i>. A <i>puja</i> is performed to seek blessing for an obstacle free wedding and bring happiness to the couple's prosperous life.              
            </p>
          </div>
          <div className="col-lg-5">
            <h2 className="font-weight-light"><i>Grah Shanti</i></h2>
            <p>
              In Sanskrit, <i>Grah</i> means planet.  Hindu astronomy is based on nine planets – <i>Navagrah</i>.  <i>Navagrah</i> refers to the nine Vedic planets or nine heavenly bodies.  They are <i>Surya</i> (sun), <i>Chandra</i> (Moon), <i>Mangla</i> (Mars), <i>Budha</i> (Mercury), <i>Guru</i> (Jupiter), <i>Shukra</i> (Venus), <i>Shanti</i> (Saturn), <i>Rahu</i> (ascending node of the moon), and <i>Ketu</i> (descending node of the Moon). During this <i>puja</i>, Hindu priest performs rituals to eliminate any inauspicious yogas to ensure happy and healthy married life for <i>Dulhan</i> (bride) and <i>Dulha</i> (groom).
            </p>
            <h2 className="font-weight-light"><i>Pithi</i></h2>
            <p>
              <i>Pithi</i> is also known as <i>Haldi</i>. <i>Haldi</i> refers to turmeric, which is made into paste. <i>Haldi</i> purifies and cleanses the body and gives a natural radiant glow of the couple entering into holy matrimony. It is used to protect the couple from bad omen that might harm them before they start their new life. <i>Haldi</i> also calms one from anxiety and jitter that they may experience.
            </p>
            <p>
              Traditionally both the bride and groom’s family individually hold this ceremony on the morning of the wedding day. Instead, we will be conducting this ceremony together.
            </p>
          </div>
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("./../images/12360268_1651595138414984_8459556525112675545_n - Copy - Copy.jpg")}
              alt=""
              width="70%"
              fluid
            />
          </div>
          <div className="col-lg-12">
            <h2 className="font-weight-light">Mehndi</h2>
            <p>
              <i>Mehndi</i> (aka henna) has been used as a form of art. <i>Menhdi</i> is held day or two before the wedding day. <i>Menhdi</i> is to beautify and bless the bride. According to legends, it's said that the darker the color of the <i>Menhdi</i>, the more love the bride will received from <i>Dulha</i> and his family.  
            </p>
            <p>
              <i>Mehndi</i> is made from dry leaves powder of <i>Lawsonia interimis</i> and known to reduces stress.
            </p>
          </div>
          <div className="col-lg-12">
            <h2 className="font-weight-light">Sanji</h2>
            <p>
              <i>Sanji</i> is an event where the <i>Dulha</i> and his family would go to the <i>Dulhan's</i> home to celebrate and sing songs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mendhi;
