import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Business, School, Code } from '@mui/icons-material';

const AboutSection = () => {
  const competencies = [
    'Strategic IT Consulting',
    'Digital Transformation',
    'System Architecture',
  ];

  const skills = [
    'Enterprise Solutions',
    'Data-Driven Strategy',
    'Agile Methodologies',
  ];

  const items = [
    {
      logo: '/netcompany-logo.png',
      title: 'Netcompany',
      subtitle: 'Founders Associate Tech & AI',
      description: 'Applying cutting-edge technology to real-world business challenges and driving digital adoption within high-profile projects.',
    },
    {
      logo: '/ur-logo.png',
      title: 'M.Sc. Information Systems',
      subtitle: 'University of Regensburg',
      description: 'Mastering the intersection of technology, data, and business strategy, with a focus on AI/ML applications and system integration.',
    },
    {
      logo: '/hm-logo.png',
      title: 'B.Sc. Information Systems and Management',
      subtitle: 'Hochschule München',
      description: 'Foundational expertise in software development, database systems, and business administration, building a robust technological baseline.',
    },
  ];

  const quote = "The true challenge is not building the technology, but architecting the transformation it enables.";
  
  const professionalExpertiseText = `
    As an IT Consultant at Netcompany, I combine strategic thinking with technical excellence to deliver transformative digital solutions across various industries. My primary focus is on leveraging advanced data methods and system architecture principles to solve complex business problems.

    My academic foundation, including a Master's in Information Systems, drives my data-driven approach to problem-solving. I am committed to bridging the gap between cutting-edge technology and measurable business impact, consistently delivering innovative, scalable, and sustainable solutions for clients.
  `;


  return (
    <Box sx={{ py: { xs: 2, md: 4 }, bgcolor: '#fff', color: '#111', borderBottom: '1px solid #e0e0e0',}}>
      <Container maxWidth="md">
        
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '0.4fr 1fr' },
            gap: { xs: 4, md: 4 },
            mb: { xs: 2, md: 4 },
            alignItems: 'start',
          }}
        >
            <Typography
              sx={{
                fontSize: { xs: '4rem', md: '5rem'},
                fontWeight: 800,
                letterSpacing: -2,
                color: '#111',
              }}
            >
              ABOUT
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.8rem', md: '1rem' },
                fontWeight: 400,
                fontStyle: 'normal',
                color: '#333',
                lineHeight: 1.8,
                maxWidth: '750px', 
                pt: { xs: 2, md: 4 }
              }}
            >
              "{quote}"
            </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
            gap: { xs: 6, md: 10 },
            mb: { xs: 6, md: 8 },
            alignItems: 'start',
          }}
        >
        
          <Box>
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#111',
                letterSpacing: 1,
              }}
            >
              PROFESSIONAL EXPERTISE
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.9,
                color: '#555',
                textAlign: 'justify',
                whiteSpace: 'pre-line',
              }}
            >
              {professionalExpertiseText}
            </Typography>
          </Box>

          {/* Experience / Education Sektion mit Logos */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0}}>
            {items.map((item, idx) => (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 0,
                  bgcolor: 'transparent',
                  borderBottom: '1px solid #eee',
                  '&:last-child': {
                    borderBottom: 'none',
                  },
                }}
              >
                {/* Logo Sektion */}
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    minWidth: 50,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                  {/* Fallback-Icons (nur für den Fall, dass die Logos nicht geladen werden) */}
                  {item.title === 'Netcompany' && !item.logo && <Business sx={{ fontSize: 40, color: '#333' }} />}
                  {item.title.startsWith('MSc') && !item.logo && <School sx={{ fontSize: 40, color: '#333' }} />}
                  {item.title.startsWith('BSc') && !item.logo && <School sx={{ fontSize: 40, color: '#333' }} />}
                </Box>
                
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#111',
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      color: '#555',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#777',
                      mt: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;