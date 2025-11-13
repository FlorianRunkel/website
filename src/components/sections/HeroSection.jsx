import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, borderBottom: '1px solid #e0e0e0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg" sx={{ position: 'relative'}}>
        <Typography sx={{ 
          fontSize: { xs: '5rem', sm: '5rem', md: '5rem', lg: '6rem' }, 
          fontWeight: 900, 
          lineHeight: 1,
          textAlign: 'center',
          letterSpacing: '-2px',
          position: 'relative',
          mixBlendMode: 'darken'
        }}>
          EXPLORE MY<br/>PORTFOLIO
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, 
          alignItems: 'flex-end',
          position: 'relative',
        }}>
          
          <Box sx={{ textAlign: { xs: 'left', md: 'left' }, order: { xs: 1, md: 1 } }}>
            <Typography 
              sx={{ 
                position: 'absolute',
                top: { xs: '20%', md: '20%' },     // etwas oberhalb des Kopfes
                left: { xs: '15%', md: '10%' },   // leicht links von der Mitte
                transform: { xs: 'translateX(-50%)', md: 'none' },
                fontSize: { xs: '0.7rem', md: '0.85rem' } ,
                color: '#888', 
                fontWeight: 600, 
                letterSpacing: 1,
                zIndex: 15,
              }}
            >
              IT Consultant 
              <br/>
              M.Sc. Information Systems
            </Typography>
          </Box>

          <Box sx={{ 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            order: { xs: 2, md: 2 },
            height: { xs: 500, md: 650 },
            overflow: 'visible',
            mt: { xs: -18, md: -22 },
            zIndex: 10,
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 5,
              width: '80%',
              height: '80%'
            }}>
            <img 
              src="/me.png" 
              alt="Portfolio"
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'cover',

                WebkitMaskImage: `
                  radial-gradient(ellipse at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%),
                  linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%)
                `,
                maskImage: `
                  radial-gradient(ellipse at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%),
                  linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%)
                `,
                WebkitMaskComposite: 'destination-in',
                maskComposite: 'intersect',
                WebkitMaskSize: '120% 120%',
                maskSize: '120% 120%',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',

                filter: 'contrast(107%) brightness(104%) saturate(102%)',
                transition: 'all 0.4s ease-in-out',
              }}
            />
            </Box>
          </Box>

          {/* Text Rechts */}
          <Box 
            sx={{ 
              alignContent:'right',
              textAlign: {md: 'left' }, 
              order: { md: 3 },
            }}
          >
            <Typography 
              sx={{
                fontSize: { xs: '0.6rem', md: '0.85rem' },
                mt: { xs: -40, md: -50 },
                lineHeight: 1.7, 
                color: '#666', 
                fontWeight: 500, 
                letterSpacing: 0.5,
                mb: 2
              }}
            >
              I AM PASSIONATE ABOUT BUILDING AI-DRIVEN SOLUTIONS AND DIGITAL TRANSFORMATION STRATEGIES THAT STAND OUT FROM THE CROWD.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#333', letterSpacing: 1 }}>CONSULTING</Typography>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#333', letterSpacing: 1 }}>MACHINE LEARNING</Typography>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#333', letterSpacing: 1 }}>FULL-STACK DEVELOPMENT</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;