// src/components/Section.js
import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';

const Section = ({ title, children }) => {
  return (
    <Box my={3}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Section;
