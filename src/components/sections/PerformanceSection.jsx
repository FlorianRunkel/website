import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { DirectionsBike, DirectionsRun, Code, Loop, TrendingUp } from '@mui/icons-material';

const PerformanceSection = () => {
  const primaryHeadline = 'Performance & Nature';
  const secondaryHeadline = 'BEYOND THE CODE';
  const subtext = 'The same principles that drive excellence in IT consulting fuel my passion for endurance sports. Both demand strategic thinking, data analysis, and unwavering commitment to continuous improvement.';

  const imageItems = [
    {
      title: 'Road Cycling',
      description: 'Pushing limits on alpine climbs',
      imgSrc: '/road-cycling.jpg',
      icon: <DirectionsBike sx={{ color: '#fff' }} />,
    },
    {
      title: 'Running',
      description: 'Finding flow state on forest trails and mountain paths',
      imgSrc: '/running.jpeg',
      icon: <DirectionsRun sx={{ color: '#fff' }} />,
    },
  ];

  const philosophyItems = [
    {
      icon: <Code sx={{ fontSize: 30, color: '#111' }} />,
      title: 'Performance Thinking',
      description: 'Whether optimizing code or training plans, data-driven decision making is key to measurable progress.',
    },
    {
      icon: <Loop sx={{ fontSize: 30, color: '#111' }} />,
      title: 'Endurance & Resilience',
      description: 'Long-distance challenges reach the mental fortitude needed for complex technical problem-solving.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 30, color: '#111' }} />,
      title: 'Strategic Adaptation',
      description: 'Nature\'s unpredictability mirrors project challenges - success requires flexibility and smart planning.',
    },
  ];

  return (
    <Box sx={{bgcolor: '#fff', color: '#111' }}>
      <Container maxWidth="md">
        
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: 3,
              color: '#555',
              mt: 4,
              display: 'block',
            }}
          >
            {secondaryHeadline}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem'},
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
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.8,
              color: '#555',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {subtext}
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ mb: { xs: 8, md: 10 } }}>
          {imageItems.map((item, idx) => (
            <Grid item xs={6} md={6} key={idx}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  height: 350,
                  borderRadius: 2, 
                  overflow: 'hidden',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
                }}
              >
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                  }}
                />
                
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    color: '#fff', 
                    backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <Typography 
                      sx={{ 
                        fontSize: '1.2rem', 
                        fontWeight: 700, 
                        letterSpacing: 0.5 
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.9rem', color: '#ccc' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            fontSize: { xs: '1.3rem', md: '1.6rem' },
            fontWeight: 700,
            mb: { xs: 5, md: 7 },
            textAlign: 'center',
            color: '#111',
          }}
        >
          Where IT Meets Athletics
        </Typography>

        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: { xs: 8, md: 10 } }}>
          {philosophyItems.map((item, idx) => (
            <Grid item xs={4} md={4} key={idx}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    border: '1px solid #333',
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#111',
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: '#555',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PerformanceSection;