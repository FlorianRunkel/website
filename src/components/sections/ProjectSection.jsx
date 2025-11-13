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
          fontSize: { xs: '0.9rem', md: '1rem' },
          lineHeight: 1.9,
          color: '#555',
          textAlign: 'justify',
          transition: 'all 0.3s ease',
        }}
      >
        {displayText}
      </Typography>

      {isLong && (
        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              color: '#111',
              transition: 'transform 0.3s ease',
              transform: expanded ? 'rotate(180deg)' : 'none',
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
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: '#fff', color: '#111', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="md">

        {/* HEADER */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 0.4fr' },
            gap: { xs: 2, md: 4 },
            mb: { xs: 6, md: 8 },
            alignItems: 'start',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontStyle: 'italic',
              color: '#333',
              lineHeight: 1.8,
              maxWidth: '700px',
              pt: { xs: 2, md: 4 },
            }}
          >
            “Education is not the learning of facts, but the training of the mind to think.”  
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 800,
              letterSpacing: -2,
              color: '#111',
            }}
          >
            PROJECTS
          </Typography>
        </Box>

        {/* MASTER THESIS */}
        <Box sx={{ mb: { xs: 4, md: 8 } }}>
          {/* Titel über gesamte Breite */}
          <Typography
            sx={{
              fontSize: '1.4rem',
              fontWeight: 900,
              color: '#111',
              letterSpacing: -0.5,
              mb: 3,
              textAlign: 'left',
            }}
          >
            MASTER THESIS
          </Typography>
            <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: 1,
              mb: 3,
              textAlign: 'left',
            }}
          >
            Anticipating Job Changes: An Explainable Machine Learning Approach for Talent Acquisition
          </Typography>

          {/* Text & Bild nebeneinander */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: '1.2fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
            }}
          >
            <Box>
              <ExpandableText>
                {`This thesis examines the challenge of forecasting candidate mobility in Active Recruiting, an issue of growing importance in Human Resource Management. While prior research has largely focused on binary attrition prediction, the temporal dynamics of career changes and the explainability of models remain underexplored. To address this gap, a web-based artefact was developed within the Design Science Research paradigm, combining machine learning with explainable AI. The framework applies XGBoost to classify candidates’ willingness to change jobs and sequential models, including Gated Recurrent Units and the Temporal Fusion Transformer, to forecast the timing of potential transitions. Explainability techniques such as SHAP and LIME were integrated to provide global and local transparency. Evaluation followed a twofold approach, comprising technical performance analysis and a user study. Results show that XGBoost achieves high predictive accuracy and recall, while the Temporal Fusion Transformer outperforms GRU in precision and practical relevance. The user study further demonstrates that explainability enhances transparency, usability, and trust, thereby strengthening the acceptance of predictive systems in recruiting. Overall, this thesis demonstrates that integrating accurate prediction models with explainable AI enables robust classification and temporal forecasting of candidate mobility while simultaneously enhancing interpretability and practical applicability.`}
              </ExpandableText>
            </Box>

            <Box
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: '#fafafa',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                width: '100%',
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
              fontSize: '1.4rem',
              fontWeight: 900,
              color: '#111',
              letterSpacing: -0.5,
              mb: 3,
              textAlign: 'right',
            }}
          >
            BACHELOR THESIS
         </Typography>
        <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: 1,
              mb: 3,
              textAlign: 'right',
            }}
          >
            Automatic categorization of companies based on their website content as software solution providers in e-commerce, banking and cloud services using text classifiers
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1.2fr' },
              gap: { xs: 4, md: 8 },
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
                filter: 'brightness(1.2)'
                }}
            />
            </Box>
            <Box>
              <ExpandableText>
                {`In this bachelor’s thesis, an investigation is conducted to determine which text classifier achieves the best results in the automatic categorization of companies that provide software solutions in the domains of e-commerce, banking, and cloud services, based on the content of their websites. To address this research question, a dataset was required, consisting of real company descriptions and job postings, each assigned to the respective business category. By extracting information directly from company websites, such a dataset could be assembled automatically. The annotation of the crawled sentences was performed using the semantic similarity of representative example sentences for each category. Building on this foundation, various text classifiers were implemented, trained, and evaluated on the constructed dataset. The classical text classifier achieved an F1-score of 0.88, making it the most effective model for automatically categorizing companies operating in the field of software development. These results enable a data-driven decision-making process regarding potential collaborations with identified companies.`}
              </ExpandableText>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
