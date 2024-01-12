import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';

const MyNavbar = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    confidence: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation for Name (only characters, not greater than 8)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(formData.name) || formData.name.length < 8) {
      alert('Please enter a valid name with only letters and greater than 8 characters.');
      return;
    }

    // Validation for Email (syntax and specific domains)
    const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|yourorganization\.com)$/i;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address with supported domains (gmail.com, yahoo.com, outlook.com, yourorganization.com).');
      return;
    }

    // Validation for Organization (name Of the organization)
    if (formData.organization.trim() === '') {
      alert('Please enter the name of the organization.');
      return;
    }

    // Validation for Message (minimum 50 characters)
    if (formData.message.length < 50) {
      alert('Please enter a message with at least 50 characters.');
      return;
    }

    // Confidence checkbox check
    if (!formData.confidence) {
      alert('Please check the confidence checkbox.');
      return;
    }

    // Your form submission logic goes here

    // Reset form data
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      confidence: false,
    });

    // Hide the modal
    setShowContactForm(false);

    // Optional: Additional logic after successful form submission
    alert('Form submitted!');
  };

  const hideContactForm = () => {
    // Reset form data on modal close
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      confidence: false,
    });
    setShowContactForm(false);
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">
          <img src="/IMAGES/Fendi-Symbol.png" alt="FENDI LOGO" style={{ width: '100px' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Item className="link">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="link" href="#" onClick={() => setShowContactForm(true)}>
                Contact Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="link">
              <Nav.Link href="#">Shop Men</Nav.Link>
            </Nav.Item>

            <Nav.Item className="link">
              <Nav.Link href="#">Shop Women</Nav.Link>
            </Nav.Item>
          </Nav>

          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {/* Display Contact Form Modal */}
      <Modal show={showContactForm} onHide={hideContactForm}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Contact Form Content */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength="15"
                pattern="[A-Za-z\s]+"
                title="Only letters and spaces are allowed"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                className="form-control"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Minimum 50 characters):</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength="50"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="confidence"
                name="confidence"
                checked={formData.confidence}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="confidence">
                I am confident enough to submit the form
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyNavbar;
