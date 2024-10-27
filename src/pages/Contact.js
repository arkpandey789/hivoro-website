// src/pages/Contact.js
import React from 'react';
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
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 60px;
  color: #666;
`;

const Contact = () => (
  <ContactContainer>
    <Heading>Contact Us</Heading>
    <Form>
      <InputField>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </InputField>
      <InputField>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </InputField>
      <InputField>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" required />
      </InputField>
      <SubmitButton type="submit">Send Message</SubmitButton>
    </Form>
    <ContactInfo>
      <p>Email: support@hivoro.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </ContactInfo>
  </ContactContainer>
);

export default Contact;
