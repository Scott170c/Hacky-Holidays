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
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  answer: {
    fontSize: '16px',
    color: '#666',
    marginTop: '8px',
  },
};

export default FAQcard;