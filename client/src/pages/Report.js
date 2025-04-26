import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaExclamationTriangle, FaUpload } from 'react-icons/fa';

const Report = () => {
  const [formData, setFormData] = useState({
    office: '',
    incidentType: '',
    description: '',
    date: '',
    isAnonymous: false
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const offices = [
    "Lagos Passport Office",
    "Abuja Passport Office",
    "Port Harcourt Passport Office",
    "Kano Passport Office",
    "Enugu Passport Office"
  ];

  const incidentTypes = [
    "Request for Bribe",
    "Deliberate Delay",
    "Rude Behavior",
    "Document Mishandling",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the report to your backend
    setShowSuccess(true);
    setFormData({
      office: '',
      incidentType: '',
      description: '',
      date: '',
      isAnonymous: false
    });
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Report an Issue</h1>
          <p className="text-center text-muted">
            Help us improve the passport application process by reporting any issues you encounter
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mx-auto">
          {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
              Thank you for your report. We take all reports seriously and will investigate this matter.
            </Alert>
          )}

          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Passport Office</Form.Label>
                  <Form.Select
                    name="office"
                    value={formData.office}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an office...</option>
                    {offices.map(office => (
                      <option key={office} value={office}>{office}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Type of Incident</Form.Label>
                  <Form.Select
                    name="incidentType"
                    value={formData.incidentType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select incident type...</option>
                    {incidentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date of Incident</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please provide detailed information about the incident..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Submit anonymously"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    <FaExclamationTriangle className="me-2" />
                    Submit Report
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <h5>Important Information</h5>
              <ul className="mb-0">
                <li>All reports are taken seriously and investigated</li>
                <li>You can choose to submit anonymously</li>
                <li>Your information will be kept confidential</li>
                <li>We work with relevant authorities to address issues</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Report; 