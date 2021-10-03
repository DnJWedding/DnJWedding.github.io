import React from "react";
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";

function WeddingAgenda() {
  return (
    <div className="home">
      <Container className="container">
        <div className="row text-center">
          <h1 className="banner font-weight-light">Wedding Agenda</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2 className="font-weight-light">Thursday</h2>
            <Card>
              <Card.Img variant="top" src="http://placehold.it/100x180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-light">Friday</h2>
            <p>
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-light">Saturday</h2>
            <p>
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WeddingAgenda;
