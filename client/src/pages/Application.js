import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, ListGroup } from 'react-bootstrap';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    {
      id: 1,
      title: "Gather Required Documents",
      description: "Prepare the following documents:",
      items: [
        "Valid Nigerian ID (NIN)",
        "Birth Certificate",
        "Local Government Certificate of Origin",
        "2 recent passport photographs",
        "Marriage Certificate (if applicable)",
        "Change of Name Document (if applicable)"
      ]
    },
    {
      id: 2,
      title: "Complete Online Application",
      description: "Visit the NIS portal and:",
      items: [
        "Create an account on the NIS portal",
        "Fill out the passport application form",
        "Upload required documents",
        "Pay the application fee",
        "Print the application confirmation"
      ]
    },
    {
      id: 3,
      title: "Book Appointment",
      description: "Schedule your appointment:",
      items: [
        "Choose your preferred passport office",
        "Select an available date and time",
        "Print your appointment confirmation",
        "Note down your appointment reference number"
      ]
    },
    {
      id: 4,
      title: "Attend Appointment",
      description: "On your appointment day:",
      items: [
        "Arrive 30 minutes before your appointment",
        "Bring all original documents",
        "Bring your application confirmation",
        "Bring your appointment confirmation",
        "Dress appropriately for passport photo"
      ]
    },
    {
      id: 5,
      title: "Collect Passport",
      description: "After processing:",
      items: [
        "Wait for SMS notification",
        "Bring your receipt to collect passport",
        "Verify all details in the passport",
        "Sign the collection register"
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Passport Application Guide</h1>
          <ProgressBar 
            now={(currentStep / totalSteps) * 100} 
            label={`Step ${currentStep} of ${totalSteps}`}
            className="mb-4"
          />
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>{steps[currentStep - 1].title}</Card.Title>
              <Card.Text>{steps[currentStep - 1].description}</Card.Text>
              <ListGroup variant="flush">
                {steps[currentStep - 1].items.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <FaCheck className="text-success me-2" />
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between mt-4">
            <Button 
              variant="outline-primary" 
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button 
              variant="primary" 
              onClick={handleNext}
              disabled={currentStep === totalSteps}
            >
              Next <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Application; 