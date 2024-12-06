import React from 'react';

// Define the type for the props
interface CardProps {
  question: string;
  answer: string;
}

// Create the component
const FAQcard: React.FC<CardProps> = ({ question, answer }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.question}>{question}</h3>
      <p style={styles.answer}>{answer}</p>
    </div>
  );
};

// Inline styles for the component
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '16px',
    margin: '16px',
    backgroundColor: 'rgba(201, 227, 255, 0.73)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '16vw',
    width: '25vw',
    border: '5px solid rgba(39, 114, 193, 0.42)',
    overflow: 'hidden',
  },
  question: {
    fontSize: '2.8rem',
    fontWeight: 790,
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    paddingLeft: '10px',
  },
  answer: {
    fontSize: '1.5rem',
    color: '#003180',
    marginTop: '8px',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontWeight: 600,
    paddingLeft: '20px'
  },
};

export default FAQcard;