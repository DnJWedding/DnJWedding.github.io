import React from "react";
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";

function WeddingAgenda() {
  return (
    <div className="home">
      <Container className="container">
        <div className="row text-center mt-5 mb-2">
          <h1 className="banner font-weight-light">Wedding Agenda</h1>
        </div>
        <div className="row mb-5">
          <div className="col-md-4">
            <h2 className="font-weight-light">Thursday</h2>
            <Card>
              <Card.Body>
                <Card.Title>Wedding Preparation</Card.Title>
                <Card.Text>
                  Join us welcoming a new begining and getting the bride and groom ready for their marriage.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>1:30 - Ganesh Puja & Pithi</ListGroupItem>
                <ListGroupItem>4:00 - Mehndi</ListGroupItem>
                <ListGroupItem>6:00 - Dinner</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-light">Friday</h2>
            <Card>
              <Card.Body>
                <Card.Title>Free Day!</Card.Title>
                <Card.Text>
                  Take this day to explore Pittsburgh.
                </Card.Text>
                <Card.Link href="https://www.theknot.com/us/jordan-buches-and-dhruv-nathwani-oct-2021/things-to-do" target="_blank">Things to do</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-light">Saturday</h2>
            <Card>
              <Card.Body>
                <Card.Title>Wedding & Reception</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>12:00 - Jaan</ListGroupItem>
                <ListGroupItem>12:45 - Wedding begins</ListGroupItem>
                <ListGroupItem>2:00 - End of Wedding</ListGroupItem>
                <ListGroupItem>4:00 - Recpetion and Dinner</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WeddingAgenda;
