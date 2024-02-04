import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="purple">Proposal </strong>
        </h1>
      </Container>
    </Container>
  );
}

export default Projects;
