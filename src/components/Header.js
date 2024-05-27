import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(135deg, #9c27b0 30%, #7e57c2 90%)', // Gradient from moderate to light purple
        boxShadow: 'none', // Remove box shadow
    }} elevation={0}>
      <Toolbar>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <Typography variant="h4" sx={{ color: '#ffffff', marginBottom: '8px' }}>
            Hemang Vijay Borse
          </Typography>
          <Typography variant="body1" sx={{ color: '#ffffff', textAlign: 'center', marginBottom: '8px' }}>
            <Link href="mailto:hemang825vb@gmail.com" color="inherit" underline="none">
              Email: hemang825vb@gmail.com
            </Link>
            {' | '}
            Phone: +91-7737204883
          </Typography>
          <Box mt={1}>
            <IconButton href="https://www.github.com/master-Hemang" target="_blank" color="inherit">
              <GitHubIcon />
              <span style={{ fontSize: '16px', marginLeft: '4px', color: '#ffffff' }}>master-Hemang</span>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/hemang-vijay-borse-557489227/" target="_blank" color="inherit">
              <LinkedInIcon />
              <span style={{ fontSize: '16px', marginLeft: '4px', color: '#ffffff' }}>Hemang Vijay Borse</span>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
