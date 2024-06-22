// ContactUs.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const ContactUs = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        For inquiries or assistance, please fill out the form below or contact us directly:
      </Typography>
      {/* Example contact form or contact information */}
      <Typography variant="body1">
        Email: <Link href="mailto:info@example.com">developeraayush145@gmail.com</Link>
      </Typography>
      <Typography variant="body1">
        Phone: <Link href="tel:+91 8445400056">+91 8445400056</Link>
      </Typography>
    </Container>
  );
};

export default ContactUs;
