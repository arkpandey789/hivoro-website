import React from 'react';
import styled from 'styled-components';
import Airtable from 'airtable';  // Import Airtable

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  position: relative;
  z-index: 1010;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 90%;  /* Ensure full width matching the button */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 96%; /* Matches the input width */

  &:hover {
    background-color: #45a049;
  }
`;

// Airtable setup
const base = new Airtable({ apiKey: 'patqzsxE9sLw9vZSt.5bad8f512f975e1afdd5acd1991538edc3789607fd30409ac3c83706d9ac6824' }).base('appSAnOdyjrMsePdm');

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the data to Airtable
      await base('Table 1').create([
        {
          fields: {
            Email: email,         // "Email" field in Airtable
            Name: name,           // "Name" field in Airtable
            'Company Name': companyName, // "Company Name" field in Airtable
          },
        },
      ]);
      alert('Thank you! You\'ve joined the waitlist.');
    } catch (error) {
      console.error('Error adding to Airtable:', error);
      alert('There was a problem. Please try again.');
    }

    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Join the Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </ModalContent>
    </Overlay>
  );
};

export default WaitlistModal;
