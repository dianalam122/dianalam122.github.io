import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "";

function ProjectCard({ tools, title, text, imgPath }) {
  return (
    <Card>
      {tools && <Card.Tools>{tools}</Card.Tools>}
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">{view}</Button>
            <Button variant="secondary">{github}</Button>
          </Col>
          <Col md={4}>
            <Image src={imgPath} alt="Project Image" thumbnail />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
