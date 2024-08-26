import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome to AI Deck Generator</Typography>
      <Typography variant="body1">Start creating your AI-generated decks now!</Typography>
    </Container>
  );
};

export default Home;
