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
    <Box sx={{ bgcolor: '#FFFFFF', minHeight: '100vh' }}>
      <Header />
      <Box id="me" sx={{ scrollMarginTop: '72px' }}>
        <HeroSection />
      </Box>
      <Box id="about" sx={{ scrollMarginTop: '72px' }}>
        <AboutSection />
      </Box>
      <Box id="projects" sx={{ scrollMarginTop: '72px' }}>
        <ProjectSection/>
      </Box>
      <Box id="sports" sx={{ scrollMarginTop: '82px' }}>
        <PerformanceSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default PortfolioPage;