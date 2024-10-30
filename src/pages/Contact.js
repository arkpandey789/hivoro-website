import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 100px 20px;
  background: #f9f9f9;
`;

const Heading = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const InputField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #666;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  width: 105%;

  &:hover {
    background-color: #45a049;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 60px;
  color: #666;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.airtable.com/v0/appocCHUXxRsDAKrQ/Table%201', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer patqzsxE9sLw9vZSt.5bad8f512f975e1afdd5acd1991538edc3789607fd30409ac3c83706d9ac6824', // Add your API key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            Name: name,
            Email: email,
            Message: message
          }
        })
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
      } else {
        alert('There was a problem. Please try again.');
      }

    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was a problem. Please try again.');
    }

    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <Form onSubmit={handleSubmit}>
        <InputField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputField>
        <InputField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputField>
        <InputField>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </InputField>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
      <ContactInfo>
        <p>Email: officialhivoro@gmail.com</p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
