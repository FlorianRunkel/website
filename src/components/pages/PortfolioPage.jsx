// src/components/pages/PortfolioPage.jsx
import React from 'react';
import { Box, Divider } from '@mui/material';
import Header from '../common/Header/Header.jsx';
import Footer from '../common/Footer/Footer.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSections.jsx';
import ProjectSection from '../sections/ProjectSection.jsx';
import PerformanceSection from '../sections/PerformanceSection.jsx';

const PortfolioPage = () => {
  return (
    <Box sx={{ bgcolor: '#FFFFFF'}}>
      <Header />
      <Box id="me" sx={{ scrollMarginTop: { xs: '60px', sm: '65px', md: '72px', lg: '72px' } }}>
        <HeroSection />
      </Box>
      <Box id="about" sx={{ scrollMarginTop: { xs: '60px', sm: '65px', md: '72px', lg: '72px' } }}>
        <AboutSection />
      </Box>
      <Box id="projects" sx={{ scrollMarginTop: { xs: '60px', sm: '65px', md: '72px', lg: '72px' } }}>
        <ProjectSection/>
      </Box>
      <Box id="beyond" sx={{ scrollMarginTop: { xs: '60px', sm: '65px', md: '82px', lg: '82px' } }}>
        <PerformanceSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default PortfolioPage;