import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Welcome to Passport Helper</h1>
          <p className="text-center lead">
            Your guide to applying for a Nigerian passport independently
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Step-by-Step Guide</Card.Title>
              <Card.Text>
                Follow our comprehensive guide to apply for your passport without any third-party assistance.
              </Card.Text>
              <Button as={Link} to="/application" variant="primary">
                Start Application
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Office Reviews</Card.Title>
              <Card.Text>
                Read reviews and ratings of passport offices from other applicants.
              </Card.Text>
              <Button as={Link} to="/reviews" variant="primary">
                View Reviews
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Report Issues</Card.Title>
              <Card.Text>
                Report any corruption or issues you encounter during the application process.
              </Card.Text>
              <Button as={Link} to="/report" variant="primary">
                Report Issue
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home; 