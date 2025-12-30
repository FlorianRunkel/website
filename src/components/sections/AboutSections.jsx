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
      subtitle: 'IT Consultant',
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
    <Box sx={{ py: { xs: 4, sm: 4.5, md: 5, lg: 5 }, bgcolor: '#fff', color: '#111', borderBottom: '1px solid #e0e0e0',}}>
      <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4, md: 3, lg: 0 } }}>
        
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '0.4fr 1fr' },
            gap: { xs: 4, sm: 4, md: 4, lg: 4 },
            mb: { xs: 5, sm: 5.5, md: 6, lg: 6 },
            alignItems: 'start',
          }}
        >
            <Typography
              sx={{
                fontSize: { xs: 'clamp(3rem, 16vw, 4rem)', sm: 'clamp(3.8rem, 14vw, 4.6rem)', md: '5.2rem', lg: '5.2rem'},
                fontWeight: 800,
                letterSpacing: -2,
                color: '#111',
                textAlign: { xs: 'left', sm: 'left', md: 'unset' }
              }}
            >
              ABOUT
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 'clamp(1rem, 3vw, 1.15rem)', sm: '1.1rem', md: '1rem', lg: '1rem' },
                fontWeight: 500,
                fontStyle: 'normal',
                color: '#333',
                lineHeight: { xs: 1.85, sm: 1.9, md: 1.9 },
                maxWidth: '750px', 
                pt: { xs: 0, sm: 0, md: 4, lg: 4 }
              }}
            >
              "{quote}"
            </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.2fr' },
            gap: { xs: 6, sm: 7, md: 10, lg: 10 },
            mb: { xs: 7, sm: 7.5, md: 8, lg: 8 },
            alignItems: 'start',
          }}
        >
        
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.55rem', md: '1.35rem', lg: '1.35rem' },
                fontWeight: 700,
                color: '#111',
                letterSpacing: 1,
                mb: { xs: 1.5, sm: 2, md: 2 }
              }}
            >
              PROFESSIONAL EXPERTISE
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.05rem', md: '1rem', lg: '1rem' },
                lineHeight: { xs: 1.95, sm: 2, md: 2 },
                color: '#444',
                textAlign: 'justify',
                whiteSpace: 'pre-line',
              }}
            >
              {professionalExpertiseText}
            </Typography>
          </Box>

          {/* Experience / Education Sektion mit Logos */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 2, md: 2 }}}>
            {items.map((item, idx) => (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center', md: 'center' },
                  gap: { xs: 2.5, sm: 2.5, md: 3 },
                  p: { xs: 2.5, sm: 2.5, md: 2.5 },
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
                    width: { xs: 60, sm: 55, md: 50 },
                    height: { xs: 60, sm: 55, md: 50 },
                    minWidth: { xs: 60, sm: 55, md: 50 },
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
                
                <Box sx={{ width: '100%' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.2rem', sm: '1.1rem', md: '1rem', lg: '1rem' },
                      fontWeight: 700,
                      color: '#111',
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', sm: '0.95rem', md: '0.9rem', lg: '0.9rem' },
                      color: '#555',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', sm: '0.95rem', md: '0.88rem', lg: '0.88rem' },
                      color: '#666',
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