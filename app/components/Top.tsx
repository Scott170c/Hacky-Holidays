import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ModelViewer = dynamic(() => import('../ModelViewer'), { ssr: false });

const tipitytopity = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col mb-8 md:flex-row items-center justify-center gap-4 pr-0 md:pr-12 w-full mx-auto pt-[10vh] md:pt-0 bg-[url('https://cloud-clj0ujnpv-hack-club-bot.vercel.app/0image.png')] border-b-4 bg-no-repeat bg-center bg-cover sm:h-[120vh] md:h-[95vh]">
      {isClient && <ModelViewer />}
      <div className="flex flex-col items-start ml-0 md:ml-[2vw] max-w-full">
        <h1 className="text-[2.8rem] md:text-[7rem] font-bold text-center md:text-left text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
          Hacky Holidays!
        </h1>
        <h2 className="text-[0.7rem] md:text-[1.9rem] font-bold text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:-mt-4">
          Design a holiday themed PCB this Winter, and get it shipped
        </h2>
        <a href="/guide">
          <button className="mx-auto mb-10 md:mx-0 text-[0.8rem] md:text-[calc(0.6vw+0.6vh)] font-bold text-white bg-[#f76f63] rounded-[2rem] px-4 py-2 md:px-8 md:py-4 mt-4 [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] text-center align-middle">
            <b>&nbsp;Learn to make a festive PCB &nbsp; ➜</b>
          </button>
        </a>
      </div>
    </div>
  );
};

export default tipitytopity;