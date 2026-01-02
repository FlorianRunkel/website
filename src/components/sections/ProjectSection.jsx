import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Block } from '@mui/icons-material';

const ExpandableText = ({ children, maxChars = 550 }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = children.length > maxChars;
  const displayText = expanded ? children : children.slice(0, maxChars) + (isLong ? '...' : '');

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1rem' },
          lineHeight: { xs: 1.9, sm: 1.95, md: 1.95 },
          color: '#444',
          textAlign: 'justify',
          transition: 'all 0.3s ease',
        }}
      >
        {displayText}
      </Typography>

      {isLong && (
        <Box sx={{ textAlign: 'center', mt: { xs: 1, sm: 1, md: 1 } }}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              color: '#111',
              transition: 'transform 0.3s ease',
              transform: expanded ? 'rotate(180deg)' : 'none',
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

const ProjectsSection = () => {
  return (
    <Box sx={{ py: { xs: 5, sm: 6, md: 8, lg: 8 }, bgcolor: '#fff', color: '#111', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4, md: 3, lg: 0 } }}>

        {/* HEADER */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 0.4fr' },
            gap: { xs: 4, sm: 5, md: 4, lg: 4 },
            mb: { xs: 5, sm: 6, md: 8, lg: 8 },
            alignItems: 'start',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.05rem', md: '1rem', lg: '1rem' },
              fontStyle: 'italic',
              color: '#333',
              lineHeight: { xs: 1.85, sm: 1.9, md: 1.9 },
              maxWidth: '700px',
              pt: { xs: 0, sm: 0, md: 4, lg: 4 },
            }}
          >
            "Education is not the learning of facts, but the training of the mind to think."  
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 'clamp(3rem, 14vw, 3.8rem)', sm: 'clamp(3.5rem, 12vw, 4.5rem)', md: '5rem', lg: '5rem' },
              fontWeight: 800,
              letterSpacing: -2,
              color: '#111',
              textAlign: { xs: 'left', sm: 'left', md: 'unset' }
            }}
          >
            PROJECTS
          </Typography>
        </Box>

        {/* MASTER THESIS */}
        <Box sx={{ mb: { xs: 5, sm: 6, md: 8, lg: 8 } }}>
          {/* Titel über gesamte Breite */}
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.45rem', md: '1.4rem', lg: '1.4rem' },
              fontWeight: 900,
              color: '#111',
              letterSpacing: -0.5,
              mb: { xs: 2.5, sm: 3, md: 3 },
              textAlign: 'left',
            }}
          >
            MASTER THESIS
          </Typography>
            <Typography
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.05rem', md: '1rem', lg: '1rem' },
              fontWeight: 600,
              color: '#111',
              letterSpacing: 1,
              mb: { xs: 2.5, sm: 3, md: 3 },
              textAlign: 'left',
            }}
          >
            Anticipating Job Changes: An Explainable Machine Learning Approach for Talent Acquisition
          </Typography>

          {/* Text & Bild nebeneinander */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1.2fr 1fr' },
              gap: { xs: 5, sm: 6, md: 8, lg: 8 },
              alignItems: 'center',
            }}
          >
            <Box>
              <ExpandableText>
                {`This thesis examines the challenge of forecasting candidate mobility in Active Recruiting, an issue of growing importance in Human Resource Management. While prior research has largely focused on binary attrition prediction, the temporal dynamics of career changes and the explainability of models remain underexplored. To address this gap, a web-based artefact was developed within the Design Science Research paradigm, combining machine learning with explainable AI. The framework applies XGBoost to classify candidates' willingness to change jobs and sequential models, including Gated Recurrent Units and the Temporal Fusion Transformer, to forecast the timing of potential transitions. Explainability techniques such as SHAP and LIME were integrated to provide global and local transparency. Evaluation followed a twofold approach, comprising technical performance analysis and a user study. Results show that XGBoost achieves high predictive accuracy and recall, while the Temporal Fusion Transformer outperforms GRU in precision and practical relevance. The user study further demonstrates that explainability enhances transparency, usability, and trust, thereby strengthening the acceptance of predictive systems in recruiting. Overall, this thesis demonstrates that integrating accurate prediction models with explainable AI enables robust classification and temporal forecasting of candidate mobility while simultaneously enhancing interpretability and practical applicability.`}
              </ExpandableText>
            </Box>

            <Box
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: '#fafafa',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                width: '100%',
                minHeight: { xs: 240, sm: 280, md: 'auto' },
            }}
            >
            <img
                src="/masterthesis.png"
                alt="Master Thesis"
                style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                }}
            />
            </Box>
          </Box>
        </Box>

        {/* BACHELOR THESIS */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.45rem', md: '1.4rem', lg: '1.4rem' },
              fontWeight: 900,
              color: '#111',
              letterSpacing: -0.5,
              mb: { xs: 2.5, sm: 3, md: 3 },
              textAlign: { xs: 'left', sm: 'left', md: 'right' },
            }}
          >
            BACHELOR THESIS
         </Typography>
        <Typography
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.05rem', md: '1rem', lg: '1rem' },
              fontWeight: 600,
              color: '#111',
              letterSpacing: 1,
              mb: { xs: 2.5, sm: 3, md: 3 },
              textAlign: { xs: 'left', sm: 'left', md: 'right' },
            }}
          >
            Automatic categorization of companies based on their website content as software solution providers in e-commerce, banking and cloud services using text classifiers
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.2fr' },
              gap: { xs: 5, sm: 6, md: 8, lg: 8 },
              alignItems: 'center',
            }}
          >
         <Box
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: '#fafafa',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                width: '100%',
                minHeight: { xs: 240, sm: 280, md: 'auto' },
            }}
            >
            <img
                src="/bachelor-thesis.png"
                alt="Bachelor Thesis"
                style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1)', 
                }}
            />
            </Box>
            <Box>
              <ExpandableText>
                {`In this bachelor's thesis, an investigation is conducted to determine which text classifier achieves the best results in the automatic categorization of companies that provide software solutions in the domains of e-commerce, banking, and cloud services, based on the content of their websites. To address this research question, a dataset was required, consisting of real company descriptions and job postings, each assigned to the respective business category. By extracting information directly from company websites, such a dataset could be assembled automatically. The annotation of the crawled sentences was performed using the semantic similarity of representative example sentences for each category. Building on this foundation, various text classifiers were implemented, trained, and evaluated on the constructed dataset. The classical text classifier achieved an F1-score of 0.88, making it the most effective model for automatically categorizing companies operating in the field of software development. These results enable a data-driven decision-making process regarding potential collaborations with identified companies.`}
              </ExpandableText>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
