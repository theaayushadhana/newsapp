// PrivacyPolicy.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
       We do not collect any user data 
      </Typography>
      <Typography variant="body1" paragraph>
       
      
      </Typography>
      <Typography variant="body1">
        For any questions regarding our Privacy Policy, please contact us at{'developeraayush145@gmail.com '}
        <Link href="developeraayush145@gmail.com">developeraayush145@gmail.com</Link>.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
