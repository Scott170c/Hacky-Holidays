import React from 'react';

interface CardProps {
  question: string;
  answer: string;
}

const FAQcard: React.FC<CardProps> = ({ question, answer }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.question}>{question}</h3>
      <p className={styles.answer}>{answer}</p>
    </div>
  );
};

const styles = {
  card: "rounded-[20px] p-[16px] my-[16px] bg-[rgba(201,227,255,0.73)] shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-[90vw] sm:w-auto md:w-auto lg:w-[26vw] sm:h-[auto] lg:h-[26vh] border-[5px] border-[rgba(39,114,193,0.42)] overflow-hidden",
  question: "text-[1.2rem] md:text-[calc(1.2vw+1.2vh)] font-[790] text-white pl-[2%] [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] text-left",
  answer: "text-[1rem] md:text-[calc(0.6vw+0.6vh)] text-[#003180] mt-[15px] font-[700] pl-[2%]  text-left"
};

export default FAQcard;