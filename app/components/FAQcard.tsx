import React from 'react';
import { Box, Heading, Text } from 'theme-ui';

interface CardProps {
  question: string;
  answer: string;
}

const FAQcard: React.FC<CardProps> = ({ question, answer }) => {
  return (
    <Box sx={styles.card}>
      <Heading as="h3" sx={styles.question}>{question}</Heading>
      <Text sx={styles.answer}>{answer}</Text>
    </Box>
  );
};

const styles = {
  card: {
    borderRadius: '20px',
    padding: '16px',
    margin: '16px',
    backgroundColor: 'rgba(201, 227, 255, 0.73)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: ['90vw', '60vw', '26vw'],
    border: '5px solid rgba(39, 114, 193, 0.42)',
    overflow: 'hidden',
  },
  question: {
    fontSize: ['1.2rem', 'calc(1.2vw + 1.2vh)'],
    fontWeight: 790,
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: '2%',
  },
  answer: {
    fontSize: ['1rem', 'calc(0.6vw + 0.6vh)'],
    color: '#003180',
    marginTop: '15px',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 600,
    paddingLeft: '2%',
  },
};

export default FAQcard;