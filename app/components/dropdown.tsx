/** @jsxImportSource theme-ui */
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      sx={{
        borderBottom: '1px solid #ddd',
        padding: '16px 0',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          background: 'none',
          border: 'none',
          padding: 0,
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          cursor: 'pointer',
          textAlign: 'left',
          ':hover': {
            color: '#0070f3',
          },
        }}
      >
        {question}
        <span
          sx={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'transform 0.2s',
          }}
        >
          ▶
        </span>
      </button>
      {isOpen && (
        <p
          sx={{
            marginTop: '8px',
            fontSize: '16px',
            color: '#555',
            lineHeight: 1.6,
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = ({ items }) => {
  return (
    <div
      sx={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '16px',
      }}
    >
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
