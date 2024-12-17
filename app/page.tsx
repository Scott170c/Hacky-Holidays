"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import Snowfall from "react-snowfall";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/footer"), { ssr: false });
const Top = dynamic(() => import("./components/top"), { ssr: false });
const FAQcard = dynamic(() => import("./components/FAQcard"), { ssr: false });
const ThreeGrid = dynamic(() => import("./components/3box"), { ssr: false });

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@google/model-viewer");
    }
  }, []);


  return (
    <div>
      {/* Snowfall effect */}
      <Snowfall
        speed={[0.5, 3]}
        radius={[2.0, 4.0]}
        snowflakeCount={100}
        wind={[-0.1, 0.1]}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1}}
      />

      {/* Main Content */}
      <div className="grid gap-0 bg-gradient-to-b from-[rgba(0,153,255,1)] to-[rgba(130,205,255,1)] md:h-[100%] relative z-0">
        {/* Header Section */}
        <div className="absolute top-0 left-0">
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
            <button>
              <img
                src="https://assets.hackclub.com/flag-orpheus-top.svg"
                className="h-20"
                alt="Hack Club Flag"
              />
            </button>
          </a>
        </div>

        {/* Top Component */}
        <Top />

        {/* Main Section */}
        <div className="flex flex-col items-center justify-center text-center text-white px-6">
          <h3 className="font-inter font-bold text-lg md:text-2xl drop-shadow-md pt-8 sm:px-8 md:px-16">
          Want a cool christmas decoration? A cool gift for someone you know? Design a unique PCB decoration from scratch and submit it via PR to OnBoard before the 30th! Once your PR gets approved, you will get your PCB decoration just in time for the holidays!🎄
          </h3>
          <ThreeGrid />
          <h3 className="mt-6 font-inter font-bold text-lg md:text-2xl drop-shadow-md sm:px-8 md:px-16">
            At the end, submissions will be peer-reviewed and voted for the top 3. The top 3 will
            be re-made and can be given out as gifts!
          </h3>

          {/* FAQ Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <FAQcard
              question="What can I Make?"
              answer="You can make a PCB that celebrates any holiday you would like! Including but not limited to: Christmas, New Years, Diwali, and Hanukkah!"
            />
            <FAQcard
              question="When are Submission deadlines?"
              answer="The deadline to submit is the 30th. If you want your decoration in time for Christmas, submit before the 15th!"
            />
            <FAQcard
              question="What about the OnBoard Grant?"
              answer="You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design."
            />
          </div>

          <h2 className="font-inter font-bold text-lg md:text-3xl mt-6 pb-8">
            Any more questions? Ask in{" "}
            <a
              href="https://hackclub.slack.com/archives/C083SK3G5D3"
              className="text-blue-500 underline"
            >
              #hacky-holidays
            </a>
            !
          </h2>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}