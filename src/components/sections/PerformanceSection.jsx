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
    <Box sx={{bgcolor: '#fff', color: '#111', py: { xs: 5, sm: 6, md: 7, lg: 7 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4, md: 3, lg: 0 } }}>
        
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 7, md: 7, lg: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: '0.9rem', sm: '0.9rem', md: '0.85rem', lg: '0.85rem' },
              fontWeight: 700,
              letterSpacing: 3,
              color: '#555',
              mt: { xs: 3, sm: 3.5, md: 4, lg: 4 },
              display: 'block',
            }}
          >
            {secondaryHeadline}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 'clamp(2.8rem, 13vw, 3.5rem)', sm: 'clamp(3.2rem, 11vw, 3.8rem)', md: '4rem', lg: '4rem'},
              fontWeight: 800,
              letterSpacing: -2,
              color: '#111', 
              mb: { xs: 0.8, sm: 1, md: 1 },
            }}
          >
            {primaryHeadline}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.05rem', md: '1rem', lg: '1rem' },
              lineHeight: { xs: 1.9, sm: 1.95, md: 1.95 },
              color: '#444',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {subtext}
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 4, sm: 4.5, md: 5, lg: 5 }} sx={{ mb: { xs: 6, sm: 7, md: 9, lg: 9 } }}>
          {imageItems.map((item, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  height: { xs: 260, sm: 300, md: 350, lg: 350 },
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
                    p: { xs: 2.5, sm: 3, md: 3 },
                    color: '#fff', 
                    backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '1.15rem', sm: '1.2rem', md: '1.2rem' }, 
                        fontWeight: 700, 
                        letterSpacing: 0.5 
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.9rem' }, color: '#ccc' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.55rem', md: '1.6rem', lg: '1.6rem' },
            fontWeight: 700,
            mb: { xs: 4.5, sm: 5, md: 6, lg: 6 },
            textAlign: 'center',
            color: '#111',
          }}
        >
          Where IT Meets Athletics
        </Typography>

        <Grid container spacing={{ xs: 4, sm: 5, md: 6, lg: 6 }} sx={{ mb: { xs: 6, sm: 7, md: 8, lg: 8 } }}>
          {philosophyItems.map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: { xs: 52, sm: 54, md: 56 },
                    height: { xs: 52, sm: 54, md: 56 },
                    borderRadius: '50%',
                    border: '1px solid #333',
                    mb: { xs: 1.8, sm: 2, md: 2 },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1rem' },
                    fontWeight: 700,
                    color: '#111',
                    mb: { xs: 1.2, sm: 1.5, md: 1.5 },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '0.98rem', md: '0.95rem', lg: '0.95rem' },
                    lineHeight: { xs: 1.75, sm: 1.8, md: 1.8 },
                    color: '#444',
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