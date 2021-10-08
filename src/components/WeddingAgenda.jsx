import React from "react";
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

var options = { hour: 'numeric', minute: 'numeric', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, timeZoneName: 'short' };
var myDateTimeFormat = new Intl.DateTimeFormat('en-US', options);

var dateGanesh = new Date(Date.UTC(2021,9,7,17,30,0)); var dateGaneshText = myDateTimeFormat.format(dateGanesh);
var dateMehndi = new Date(Date.UTC(2021,9,7,20,0,0)); var dateMehndiText = myDateTimeFormat.format(dateMehndi);
var dateDinner = new Date(Date.UTC(2021,9,7,22,0,0)); var dateDinnerText = myDateTimeFormat.format(dateDinner);
var dateSangit = new Date(Date.UTC(2021,9,8,1,0,0)); var dateSangitText = myDateTimeFormat.format(dateSangit);

var dateJaan = new Date(Date.UTC(2021,9,9,15,0,0)); var dateJaanText = myDateTimeFormat.format(dateJaan);
var dateWeddingStart = new Date(Date.UTC(2021,9,9,15,40,0)); var dateWeddingStartText = myDateTimeFormat.format(dateWeddingStart);
var dateWeddingEnd = new Date(Date.UTC(2021,9,9,18,0,0)); var dateWeddingEndText = myDateTimeFormat.format(dateWeddingEnd);
var dateReception = new Date(Date.UTC(2021,9,9,20,0,0)); var dateReceptionText = myDateTimeFormat.format(dateReception);

//console.log(new Intl.DateTimeFormat('en-US', options).format(dateGanesh));

function WeddingAgenda() {
  return (
    <div className="home">
      <Container className="container">
        <div className="row text-center pt-3 pb-2">
          <h1 className="font-weight-light">Wedding Agenda</h1>
        </div>
        <div className="row">
          <div className="col-md-4 pb-5">
            <h3 className="font-weight-light">Thursday, Oct. 7</h3>
            <Card className="card">
              <Card.Img variant="top" src={require("./../images/13244754_1709462792628218_4890932340778020194_n - Copy - Copy.jpg")} />
              <Card.Body>
                <Card.Title>Pre-Wedding Rituals</Card.Title>
                <Card.Text>
                  Join us welcoming a new begining and getting the bride and groom ready for their marriage.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/*<ListGroupItem>1:30 - Ganesh Puja & Pithi</ListGroupItem>
                <ListGroupItem>4:00 - Mehndi</ListGroupItem>
                <ListGroupItem>6:00 - Dinner</ListGroupItem>
                <ListGroupItem>9:00 - Sangit</ListGroupItem>*/}
                <ListGroupItem>{ dateGaneshText } - Ganesh Puja & Pithi</ListGroupItem>
                <ListGroupItem>{ dateMehndiText } - Mehndi</ListGroupItem>
                <ListGroupItem>{ dateDinnerText } - Dinner</ListGroupItem>
                <ListGroupItem>{ dateSangitText } - Sangit</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md-4 pb-5">
            <h3 className="font-weight-light">Friday, Oct. 8</h3>
            <Card className="card">
              <Card.Body>
                <Card.Title>Free Day!</Card.Title>
                <Card.Text>
                  Take this day to explore Pittsburgh.
                </Card.Text>
                <Card.Link href="https://www.theknot.com/us/jordan-buches-and-dhruv-nathwani-oct-2021/things-to-do" target="_blank">Things to do <FontAwesomeIcon icon={faExternalLinkAlt} /></Card.Link>
              </Card.Body>
              <Card.Img variant="top" src={require("./../images/17362362_1843266792581150_5086625621452750390_n - Copy.jpg")} />
            </Card>
          </div>
          <div className="col-md-4 pb-5">
            <h3 className="font-weight-light">Saturday, Oct. 9</h3>
            <Card className="card">
              <Card.Img variant="top" src={require("./../images/12342431_1650337178540780_8554205907818693647_n - Copy - Copy.jpg")} />
              <Card.Body>
                <Card.Title>Wedding Day</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/*<ListGroupItem>12:00 - Jaan</ListGroupItem>
                <ListGroupItem>12:45 - Wedding begins</ListGroupItem>
                <ListGroupItem>2:00 - Wedding ends</ListGroupItem>
                <ListGroupItem>4:00 - Reception & Dinner</ListGroupItem>*/}
                <ListGroupItem>{ dateJaanText } - Jaan</ListGroupItem>
                <ListGroupItem>{ dateWeddingStartText } - Wedding begins</ListGroupItem>
                <ListGroupItem>{ dateWeddingEndText } - Wedding ends</ListGroupItem>
                <ListGroupItem>{ dateReceptionText } - Reception & Dinner</ListGroupItem>
              </ListGroup>
              <Card.Img variant="top" src={require("./../images/14708371_1771367676437729_6393053865330127976_n - Copy - Copy.jpg")} />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WeddingAgenda;
