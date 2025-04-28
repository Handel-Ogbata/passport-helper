import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, ListGroup, Accordion } from 'react-bootstrap';
import { FaCheck, FaArrowRight, FaChevronDown } from 'react-icons/fa';

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    {
      id: 1,
      title: "Gather Required Documents",
      description: "Prepare the following documents:",
      items: [
        {
          name: "Valid Nigerian ID (NIN)",
          requirements: {
            format: "PDF or JPEG",
            size: "Less than 2MB",
            guidelines: [
              "Ensure the NIN slip is clear and all details are legible",
              "Scan or photograph the entire slip without any parts cut off",
              "Avoid shadows or glare on the document"
            ],
            link: "https://www.ilovepdf.com/compress_pdf"
          }
        },
        {
          name: "Birth Certificate",
          requirements: {
            format: "PDF or JPEG",
            size: "Less than 2MB",
            guidelines: [
              "Ensure the document is clear and legible",
              "Scan or photograph the entire document without any parts cut off",
              "Avoid shadows or glare on the document"
            ],
            link: "https://www.ilovepdf.com/compress_pdf"
          }
        },
        {
          name: "Local Government Certificate of Origin",
          requirements: {
            format: "PDF or JPEG",
            size: "Less than 2MB",
            guidelines: [
              "Ensure the certificate is clear and legible",
              "Scan or photograph the entire document without any parts cut off",
              "Avoid shadows or glare on the document"
            ],
            link: "https://www.ilovepdf.com/compress_pdf"
          }
        },
        {
          name: "2 recent passport photographs",
          requirements: {
            format: "JPEG or PNG",
            size: "Less than 2MB",
            dimensions: "600 x 800 pixels",
            background: "White",
            guidelines: [
              "Face the camera directly with a neutral expression",
              "Ensure your face and ears are fully visible",
              "No glasses, hats, or head coverings unless for religious reasons",
              "Use natural lighting to avoid shadows",
              "Ensure the photo is clear and not pixelated"
            ],
            link: "https://passport.immigration.gov.ng/image-compliance"
          }
        },
        {
          name: "Marriage Certificate (if applicable)",
          requirements: {
            format: "PDF or JPEG",
            size: "Less than 2MB",
            guidelines: [
              "Ensure the document is clear and legible",
              "Scan or photograph the entire document without any parts cut off",
              "Avoid shadows or glare on the document"
            ],
            link: "https://www.ilovepdf.com/compress_pdf"
          }
        },
        {
          name: "Change of Name Document (if applicable)",
          requirements: {
            format: "PDF or JPEG",
            size: "Less than 2MB",
            guidelines: [
              "Ensure the document is clear and legible",
              "Scan or photograph the entire document without any parts cut off",
              "Avoid shadows or glare on the document"
            ],
            link: "https://www.ilovepdf.com/compress_pdf"
          }
        }
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

  const renderDocumentRequirements = (item) => {
    if (currentStep === 1 && item.requirements) {
      return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <small className="text-muted">View Requirements</small>
            </Accordion.Header>
            <Accordion.Body>
              <div className="mb-2">
                <strong>Format:</strong> {item.requirements.format}
              </div>
              <div className="mb-2">
                <strong>Size:</strong> {item.requirements.size}
              </div>
              {item.requirements.dimensions && (
                <div className="mb-2">
                  <strong>Dimensions:</strong> {item.requirements.dimensions}
                </div>
              )}
              {item.requirements.background && (
                <div className="mb-2">
                  <strong>Background:</strong> {item.requirements.background}
                </div>
              )}
              <div className="mb-2">
                <strong>Guidelines:</strong>
                <ul className="mb-2">
                  {item.requirements.guidelines.map((guideline, index) => (
                    <li key={index}>{guideline}</li>
                  ))}
                </ul>
              </div>
              <div>
                <a href={item.requirements.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                  View Tool
                </a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
    }
    return null;
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
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <FaCheck className="text-success me-2" />
                        {typeof item === 'string' ? item : item.name}
                      </div>
                    </div>
                    {renderDocumentRequirements(item)}
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