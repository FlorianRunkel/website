import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">

        {/* Headline */}
        <Typography
          sx={{
            fontSize: {
              xs: 'clamp(2.4rem, 9vw, 3.2rem)',
              md: 'clamp(4rem, 8vw, 5.2rem)',
            },
            fontWeight: 900,
            letterSpacing: '-2px',
            textAlign: 'center',
            lineHeight: 1,
            mb: { xs: -4, md: -6 },
          }}
        >
          EXPLORE MY
          <br />
          PORTFOLIO
        </Typography>

        {/* Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr auto 1fr',
            },
            alignItems: 'center',
            gap: { xs: 0, md: 6 },
          }}
        >
          {/* LEFT TEXT – DESKTOP ONLY */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '1.8rem', fontWeight: 700, }}>
              IT Consultant
            </Typography>
            <Typography sx={{ fontSize: '0.85rem', color: '#888', maxWidth: 260, ml: 'auto' }}>
            Advising clients on technology strategy and business improvement.
            </Typography>
          </Box>

          {/* IMAGE */}
          <Box
            sx={{
              mx: 'auto',
              width: {
                xs: 280,
                sm: 400,
                md: 500,
              },
              height: {
                xs: 380,
                sm: 400,
                md: 580,
              },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
          <Box
            component="img"
            src="/me.png"
            alt="Portrait"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',

              WebkitMaskImage: `
              radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)
            `,
            maskImage: `
              radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)
            `,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskComposite: 'destination-in',
            maskComposite: 'intersect',
        
            // Bildoptimierung
            filter: 'contrast(107%) brightness(104%) saturate(102%)',
            transition: 'all 0.4s ease-in-out',
          }}
          />
          </Box>
          {/* RIGHT TEXT – DESKTOP ONLY */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '1.8rem', fontWeight: 700 }}>
              &lt;coder&gt;
            </Typography>
            <Typography sx={{ fontSize: '0.85rem', color: '#888', maxWidth: 260 }}>
            Developing scalable systems that bridge technology and business requirements.
          </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default HeroSection;
