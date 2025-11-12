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
    <Box sx={{ mb:4}}>
      <Container maxWidth="lg">
        {/* Logo zentriert */}
        <Box sx={{ textAlign: 'center', mb: 3}}>
          <Box
            component="img"
            src="public/logo.png"
            alt="Logo"
            sx={{
              height: { xs: 30, sm: 50 }, // Größe anpassen
              width: { xs: 30, sm: 50 },  // gleiche Breite für perfekten Kreis
              borderRadius: '50%',        // rund machen
              border: '2px solid #000',   // optionaler Rahmen
              objectFit: 'cover',         // Bild füllt Kreis korrekt aus
              mx: 'auto',   
              mb:1             // zentrieren
            }}
          />
          <Typography sx={{ fontSize: '0.8rem', color: '#777' }}>
            © {new Date().getFullYear()} Florian Runkel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
