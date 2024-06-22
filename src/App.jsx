import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Link as MuiLink } from '@mui/material';
import PrivacyPolicy from '../src/privacypolicy';
import ContactUs from '../src/contactus';
import News from '../src/news'

const App = () => {
  return (
    <Router>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           ApnaNews App
          </Typography>
          <MuiLink component={Link} to="/privacy" color="inherit" sx={{ marginRight: 2 }}>
            Privacy Policy
          </MuiLink>
          <MuiLink component={Link} to="/contact" color="inherit">
            Contact Us
          </MuiLink>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Container>
      <News/>
    </Router>
  );
};

export default App;
