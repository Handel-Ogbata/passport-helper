import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const Reviews = () => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Sample data - in a real app, this would come from your backend
  const offices = [
    "Lagos Passport Office",
    "Abuja Passport Office",
    "Port Harcourt Passport Office",
    "Kano Passport Office",
    "Enugu Passport Office"
  ];

  const sampleReviews = [
    {
      id: 1,
      office: "Lagos Passport Office",
      rating: 4,
      comment: "Very efficient service. Staff were helpful and professional.",
      date: "2024-03-15"
    },
    {
      id: 2,
      office: "Abuja Passport Office",
      rating: 3,
      comment: "Average experience. Long wait times but staff were courteous.",
      date: "2024-03-10"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the review to your backend
    alert('Thank you for your review!');
    setRating(0);
    setComment('');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-warning" : "text-muted"}
      />
    ));
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Passport Office Reviews</h1>
          <p className="text-center text-muted">
            Share your experience and help others choose the best office
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Submit a Review</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Office</Form.Label>
                  <Form.Select
                    value={selectedOffice}
                    onChange={(e) => setSelectedOffice(e.target.value)}
                    required
                  >
                    <option value="">Choose an office...</option>
                    {offices.map((office) => (
                      <option key={office} value={office}>
                        {office}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`star-rating ${star <= rating ? 'text-warning' : 'text-muted'}`}
                        onClick={() => setRating(star)}
                        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                      />
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit Review
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <h2>Recent Reviews</h2>
          <ListGroup>
            {sampleReviews.map((review) => (
              <ListGroup.Item key={review.id}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">
                    <FaMapMarkerAlt className="text-primary me-2" />
                    {review.office}
                  </h5>
                  <small className="text-muted">{review.date}</small>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p className="mb-0">{review.comment}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews; 