import React from 'react';

interface CardProps {
  question: string;
  answer: string;
}

const FAQcard: React.FC<CardProps> = ({ question, answer }) => {
  return (
    <div className="rounded-[20px] p-[16px] my-[16px] bg-[rgba(201,227,255,0.73)] shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-[90vw] sm:w-auto md:w-auto lg:w-[26vw] sm:h-[auto] lg:h-[26vh] border-[5px] border-[rgba(39,114,193,0.42)] overflow-hidden">
      <h3 className="text-[1rem] md:text-[calc(1vw+1vh)] font-[790] text-white pl-[2%] [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] text-left break-words">
        {question}
      </h3>
      <p className="text-[0.9rem] md:text-[calc(0.6vw+0.6vh)] text-[#003180] mt-[15px] font-[700] pl-[2%] text-left">
        {answer}
      </p>
    </div>
  );
};

export default FAQcard;