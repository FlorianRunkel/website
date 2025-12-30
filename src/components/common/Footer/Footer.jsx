import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform) => {
    const links = {
      github: 'https://github.com/FlorianRunkel',
      linkedin: 'https://www.linkedin.com/in/florian-runkel-82b521228/',
      mail: 'mailto:f.runkel@yahoo.com', // Hier deine E-Mail einsetzen
    };
    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  return (
    <Box sx={{ mb: { xs: 3, sm: 3.5, md: 4, lg: 4 }}}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 4, lg: 4 } }}>
        {/* Logo zentriert */}
        <Box sx={{ textAlign: 'center', mb: { xs: 2.5, sm: 3, md: 3 }}}>
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              height: { xs: 30, sm: 40, md: 50, lg: 50 },
              width: { xs: 30, sm: 40, md: 50, lg: 50 },
              borderRadius: '50%',
              objectFit: 'cover',
              mx: 'auto',   
              mb: { xs: 0.8, sm: 1, md: 1 }
            }}
          />
          <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.8rem', lg: '0.8rem' }, color: '#777' }}>
            © {new Date().getFullYear()} Florian Runkel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
