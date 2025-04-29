import React, { useState } from 'react';
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
        <div className="requirements-accordion">
          <button 
            className="requirements-toggle"
            onClick={(e) => {
              e.currentTarget.parentElement.classList.toggle('active');
            }}
          >
            <span>View Requirements</span>
            <FaChevronDown />
          </button>
          <div className="requirements-content">
            <div className="requirement-item">
              <strong>Format:</strong> {item.requirements.format}
            </div>
            <div className="requirement-item">
              <strong>Size:</strong> {item.requirements.size}
            </div>
            {item.requirements.dimensions && (
              <div className="requirement-item">
                <strong>Dimensions:</strong> {item.requirements.dimensions}
              </div>
            )}
            {item.requirements.background && (
              <div className="requirement-item">
                <strong>Background:</strong> {item.requirements.background}
              </div>
            )}
            <div className="requirement-item">
              <strong>Guidelines:</strong>
              <ul>
                {item.requirements.guidelines.map((guideline, index) => (
                  <li key={index}>{guideline}</li>
                ))}
              </ul>
            </div>
            <a 
              href={item.requirements.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              View Tool
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="application-container">
      <div className="application-header">
        <h1>Passport Application Guide</h1>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
          <span className="progress-text">Step {currentStep} of {totalSteps}</span>
        </div>
      </div>

      <div className="application-content">
        <div className="step-card">
          <h2>{steps[currentStep - 1].title}</h2>
          <p className="step-description">{steps[currentStep - 1].description}</p>
          <div className="items-list">
            {steps[currentStep - 1].items.map((item, index) => (
              <div key={index} className="list-item">
                <div className="item-header">
                  <FaCheck className="check-icon" />
                  <span>{typeof item === 'string' ? item : item.name}</span>
                </div>
                {renderDocumentRequirements(item)}
              </div>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button 
            className="btn-secondary"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button 
            className="btn-primary"
            onClick={handleNext}
            disabled={currentStep === totalSteps}
          >
            Next <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application; 