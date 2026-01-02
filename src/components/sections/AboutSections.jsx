import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Business, School } from '@mui/icons-material';

const AboutSection = () => {
  const items = [
    {
      logo: '/netcompany-logo.png',
      title: 'Netcompany',
      subtitle: 'IT Consultant',
      description:
        'Applying cutting-edge technology to real-world business challenges and driving digital adoption within high-profile projects.',
    },
    {
      logo: '/ur-logo.png',
      title: 'M.Sc. Information Systems',
      subtitle: 'University of Regensburg',
      description:
        'Mastering the intersection of technology, data, and business strategy, with a focus on AI/ML applications and system integration.',
    },
    {
      logo: '/aurio.jpeg',
      title: 'Founders Associate',
      subtitle: 'Working Student',
      description:
        'Developing AI-driven solutions using Python. Supporting product development and customer success initiatives',
    },
    {
      logo: '/hm-logo.png',
      title: 'B.Sc. Information Systems and Management',
      subtitle: 'Hochschule München',
      description:
        'Foundational expertise in software development, database systems, and business administration, building a robust technological baseline.',
    },
    {
      logo: '/vodafone_logo.jpeg',
      title: 'Software Engineer',
      subtitle: 'Internship',
      description:
        'Assisted in team and project management. Applied agile methodologies, including Scrum and SAFe. Developed software solutions using Java',
    },
    {
      logo: '/asmpt_smt_solutions_logo.jpeg',
      title: 'Software Engineer',
      subtitle: 'Internship',
      description:
        'Developed graphical user interfaces for Measurement System Analysis using Python. Created dashboards for continuous global monitoring of product quality, utilizing internal databases and SAP',
    },
  ];

  const quote =
    'The true challenge is not building the technology, but architecting the transformation it enables.';

  const professionalExpertiseText = `
As an IT Consultant at Netcompany, I combine strategic thinking with technical excellence to deliver transformative digital solutions across various industries. My primary focus is on leveraging advanced data methods and system architecture principles to solve complex business problems. My academic foundation, including a Master's in Information Systems, drives my data-driven approach to problem-solving. I am committed to bridging the gap between cutting-edge technology and measurable business impact, consistently delivering innovative, scalable, and sustainable solutions for clients.
`;

  return (
    <Box sx={{ py: { xs: 5, sm: 6, md: 8, lg: 8 }, bgcolor: '#fff', color: '#111', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4, md: 3, lg: 0 } }}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 2, sm: 3, md: 4 },
          flexWrap: 'nowrap',
          mb: { xs: 2, sm: 4, md: 6 },
        }}
      >

      <Typography
        sx={{
          fontSize: { xs: '2.5rem', sm: '4rem', md: '5.2rem' },
          fontWeight: 900,
          letterSpacing: -2,
          color: '#111',
          textAlign: 'center',
          flex: '1 0 auto',      // bleibt kompakt
          whiteSpace: 'nowrap',  // verhindert Umbruch
        }}
      >
        ABOUT
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 'clamp(0.9rem, 3vw, 1rem)', sm: '1.1rem', md: '1.15rem' },
          fontWeight: 400,
          color: '#555',
          lineHeight: 1.9,
          textAlign: 'justify',
          fontStyle: 'italic',
          flex: '5 0 60%', // breiter Bereich
          maxWidth: '950px',
        }}
      >
        "{quote}"
      </Typography>
          </Box>

        {/* Professional Expertise */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.75rem', md: '1.5rem' },
              fontWeight: 700,
              color: '#111',
            }}
          >
            PROFESSIONAL EXPERTISE
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.05rem' },
              lineHeight: { xs: 2, sm: 2, md: 2 },
              color: '#444',
              textAlign: 'justify',
              whiteSpace: 'pre-line',
            }}
          >
            {professionalExpertiseText}
          </Typography>
        </Box>

        {/* Horizontale Cards */}
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
          }}
        >
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          py: 3,
          px: 1,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,0,0,0.1) transparent',
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': { background: 'rgba(0,0,0,0.12)', borderRadius: 3 },
          '&:hover::-webkit-scrollbar-thumb': { background: 'rgba(0,0,0,0.2)' },
          scrollBehavior: 'smooth',
        }}
      >
          {items.map((item, idx) => (
            <Paper
            key={idx}
            elevation={4}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gridTemplateRows: 'auto auto', // erste Zeile: Logo + Titel, zweite Zeile: Beschreibung
              alignItems: 'start',
              gap: 2,
              p: 3,
              borderRadius: 3,
              minWidth: 380,
              maxWidth: 400,
              scrollSnapAlign: 'start',
              flexShrink: 0,
              bgcolor: '#fff',
              textAlign: 'left',
              boxShadow: '0 0px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'translateY(-4px)' },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: 60,
                height: 60,
                gridRow: '1 / span 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : item.title.includes('Netcompany') ? (
                <Business sx={{ fontSize: 40, color: '#333' }} />
              ) : (
                <School sx={{ fontSize: 40, color: '#333' }} />
              )}
            </Box>

            {/* Titel + Subtitle */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#111',
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: '#777', fontSize: '0.95rem'}}>
                {item.subtitle}
              </Typography>
            </Box>

            {/* Beschreibung: jetzt volle Breite unter Logo + Titel */}
            <Typography
              sx={{
                color: '#555',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                gridColumn: '1 / span 2', // Vollbreite über beide Spalten
              }}
            >
              {item.description}
            </Typography>
          </Paper>
          ))}
        </Box>
      </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
