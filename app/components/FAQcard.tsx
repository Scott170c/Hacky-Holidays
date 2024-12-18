import { kMaxLength } from 'buffer';
import React from 'react';
import { Box } from 'theme-ui';
// Define the type for the props
interface CardProps {
  question: string;
  answer: string;
}

// Create the component
const FAQcard: React.FC<CardProps> = ({ question, answer }) => {
  return (
    <Box sx={styles.card}>
      <h3 style={styles.question}>{question}</h3>
      <p style={styles.answer}>{answer}</p>
    </Box>
  );
};

// Inline styles for the component
const styles = {
  card: {
    borderRadius: '20px',
    padding: '16px',
    margin: '16px',
    backgroundColor: 'rgba(201, 227, 255, 0.73)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: ['fill-content', '16vw'],
    width: ['60vw', '26vw'],
    border: '5px solid rgba(39, 114, 193, 0.42)',
    overflow: 'hidden',
  },
  question: {
    fontSize: 'calc(1.2vw + 1.2vh)',
    fontWeight: 790,
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: '2%',
  },
  answer: {
    fontSize: 'calc(0.6vw + 0.6vh)',
    color: '#003180',
    marginTop: '8px',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 600,
    paddingLeft: '2%'
  },
};

export default FAQcard;