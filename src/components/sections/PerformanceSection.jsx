import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Collapse, IconButton } from '@mui/material';
import { DirectionsBike, DirectionsRun, Code, Loop, TrendingUp, ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PerformanceSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  const primaryHeadline = 'Performance & Nature';
  const secondaryHeadline = 'BEYOND THE CODE';
  const subtext =
    'The same principles that drive excellence in IT consulting fuel my passion for endurance sports. Both demand strategic thinking, data analysis, and unwavering commitment to continuous improvement.';

    const imageItems = [
      {
        title: 'Road Cycling',
        description: 'Chasing speed and pushing every limit.',
        imgSrc: '/road-cycling.jpg',
      },
      {
        title: 'Gravel',
        description: 'Where adventure meets every unpaved road.',
        imgSrc: '/cycling2.jpeg',
      },
      {
        title: 'Running',
        description: 'Pushing limits on every trail, one stride at a time.',
        imgSrc: '/running.jpeg',
      },
      {
        title: 'Hiking',
        description: 'Conquering trails and embracing nature’s peaks.',
        imgSrc: '/hiking.jpeg',
      },
      {
        title: 'Paddle',
        description: 'Glide across the water, balance in every stroke.',
        imgSrc: '/paddle.jpeg',
      },
      {
        title: 'Snowboarding',
        description: 'Carving fresh powder with style and freedom.',
        imgSrc: '/snowboard.jpeg',
      },
    ];

  const philosophyItems = [
    {
      icon: <Code sx={{ fontSize: 30, color: '#111' }} />,
      title: 'Performance Thinking',
      description:
        'Whether optimizing code or training plans, data-driven decision making is key to measurable progress.',
    },
    {
      icon: <Loop sx={{ fontSize: 30, color: '#111' }} />,
      title: 'Endurance & Resilience',
      description:
        'Long-distance challenges reach the mental fortitude needed for complex technical problem-solving.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 30, color: '#111' }} />,
      title: 'Strategic Adaptation',
      description:
        "Nature's unpredictability mirrors project challenges - success requires flexibility and smart planning.",
    },
  ];

  return (
    <Box sx={{ bgcolor: '#fff', color: '#111', py: { xs: 3, sm: 2, md: 4, lg: 4 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3} }}>

        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 7, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: '0.9rem', sm: '0.9rem' },
              fontWeight: 700,
              letterSpacing: 3,
              color: '#555',
              mt: 3,
              display: 'block',
            }}
          >
            {secondaryHeadline}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 'clamp(2.8rem, 13vw, 3.5rem)', sm: 'clamp(3.2rem, 11vw, 3.8rem)' },
              fontWeight: 800,
              letterSpacing: -2,
              color: '#111',
              mb: 1,
            }}
          >
            {primaryHeadline}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.05rem' },
              lineHeight: 1.9,
              color: '#444',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {subtext}
          </Typography>
        </Box>
        <Box sx={{ overflow: 'hidden', width: '100%', mb: 5 }}>
        <Box
          sx={{
            display: 'flex',
            width: 'max-content', // wichtig für Endlosanimation
            animation: 'scroll 40s linear infinite',
          }}
        >
          {imageItems.concat(imageItems).map((item, idx) => (
            <Box
              key={idx}
              sx={{
                flex: '0 0 auto',
                width: { xs: 200, sm: 250, md: 300 },
                height: { xs: 150, sm: 200, md: 200 },
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                mr: 2,
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 1,
                  backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  color: '#fff',
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.65rem', sm: '0.8rem', md: '0.85rem' },
                    color: '#ccc',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </Box>

        <Box
          sx={{
            textAlign: 'center', // zentriert Text und Button
            mb: 3,
            display: { xs: 'block', sm: 'none' }, // nur Mobile
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.55rem' },
              fontWeight: 700,
              color: '#111',
              mb: 1, // Abstand zum Button
            }}
          >
            Where IT Meets Athletics
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.05rem' },
              lineHeight: 1.9,
              color: '#444',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Bridging technology and endurance to push limits every day.
          </Typography>

          <IconButton
            size="small" // kleiner Button
            onClick={() => setShowDetails(!showDetails)}
            sx={{
              color: '#111',
              transition: 'transform 0.3s ease',
              transform: showDetails ? 'rotate(180deg)' : 'none',
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <ExpandMoreIcon fontSize="small" /> {/* kleiner Pfeil */}
          </IconButton>
        </Box>

        {/* Ausklappbarer Bereich */}
        <Collapse in={showDetails}>
            <Box sx={{ mb: 6 }}>

            <Grid container spacing={3}>
              {philosophyItems.map((item, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        border: '1px solid #333',
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>

        {/* Desktop: immer sichtbar */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          {/* Überschrift */}
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.55rem', md: '1.8rem' },
              fontWeight: 700,
              color: '#111',
            }}
          >
            Where IT Meets Athletics
          </Typography>

          {/* Kurzer Text darunter */}
          <Typography
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.05rem' },
              lineHeight: 1.8,
              color: '#444',
              maxWidth: '700px',
              mx: 'auto', // zentriert horizontal
            }}
          >
            Bridging technology and endurance to push limits every day.
          </Typography>
        </Box>
          <Grid container spacing={3}>
            {philosophyItems.map((item, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      border: '1px solid #333',
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#444' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PerformanceSection;
