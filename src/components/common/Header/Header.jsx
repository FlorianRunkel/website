import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import { SmokeFree } from '@mui/icons-material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); // Drawer schließen nach Klick
  };

  const handleSocialClick = (platform) => {
    const links = {
      github: 'https://github.com/FlorianRunkel',
      linkedin: 'https://www.linkedin.com/in/florian-runkel-82b521228/',
      mail: 'mailto:f.runkel@yahoo.com',
    };
    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  const navLinks = ['me', 'about', 'projects', 'sports'];

  return (
    <Box sx={{ py: 3, borderBottom: '1px solid #e0e0e0', position: 'sticky', top: 0, bgcolor: 'white', zIndex: 100 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          {/* Logo */}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              letterSpacing: 1,
              color: '#000',
              flexShrink: 0,
              cursor: 'pointer',
            }}
            onClick={() => handleNavClick('me')}
          >
            Florian Runkel
          </Typography>

          {/* Navigation für große Screens (md und größer) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navLinks.map((section) => (
              <Box
                key={section}
                onClick={() => handleNavClick(section)}
                sx={{
                  px: 2.5,
                  py: 1.2,
                  border: '1px solid #d0d0d0',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  fontWeight: 0,
                }}
              >
                {section.toUpperCase()}
              </Box>
            ))}
          </Box>

          {/* Social Icons + Burger für kleine Screens */}
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            {/* GitHub */}
            <Box
              onClick={() => handleSocialClick('github')}
              sx={{
                p: 1,
                border: '1px solid #d0d0d0',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: '#f5f5f5' },
              }}
            >
              <Github size={16} strokeWidth={1.5} />
            </Box>

            {/* LinkedIn */}
            <Box
              onClick={() => handleSocialClick('linkedin')}
              sx={{
                p: 1,
                border: '1px solid #d0d0d0',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: '#f5f5f5' },
              }}
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </Box>

            {/* Mail */}
            <Box
              onClick={() => handleSocialClick('mail')}
              sx={{
                p: 1,
                border: '1px solid #d0d0d0',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: '#f5f5f5' },
              }}
            >
              <Mail size={16} strokeWidth={1.5} />
            </Box>

            {/* Burger für Screens kleiner als md */}
            <Box
              onClick={() => setDrawerOpen(true)}
              sx={{
                p: 1,
                border: '1px solid #d0d0d0',
                borderRadius: '50%',
                cursor: 'pointer',
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                '&:hover': { bgcolor: '#f5f5f5' },
              }}
            >
              <Menu size={16} />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Drawer für kleine Screens */}
      <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  PaperProps={{
    sx: {
      width: 250,
      p: 3,
      bgcolor: '#ffffff', // weißer Hintergrund, minimalistisch
    }
  }}
>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {navLinks.map((section) => (
      <Box
        key={section}
        onClick={() => handleNavClick(section)}
        sx={{
          px: 2.5,
          py: 2,
          borderRadius: '10px',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '0.8rem',
          cursor: 'pointer',
          bgcolor: '#fff',
        }}
      >
        {section.toUpperCase()}
      </Box>
    ))}

  </Box>
</Drawer>

    </Box>
  );
};

export default Header;
