"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import Snowfall from "react-snowfall";
import dynamic from "next/dynamic";
import { Grid } from "theme-ui";
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
        <link rel="icon" href = "https://assets.hackclub.com/icon-rounded.svg"></link>

      {/* Snowfall effect */}
      <Snowfall
        speed={[0.5, 3]}
        radius={[2.0, 4.0]}
        snowflakeCount={100}
        wind={[-0.1, 0.1]}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
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
        <div className="flex flex-col items-center justify-center text-white px-4 md:px-20">
          <h3 className="font-inter font-bold text-lg md:text-2xl drop-shadow-md pt-8 sm:px-8 md:px-16 lg:px-[9rem]">
            This holiday season, until Jan 20th, make a festive themed PCB design of one of the many holidays, Christmas, New Years, Diwali, Hanukkah, or any others! You can design a PCB that celebrates any holiday you would like! The PCB can be a decoration, a gift, or anything else you can think of!
            <br></br><br></br>
            The PCB can be as simple or as complex as you want, we have some example designs and reference schematics location in our <a href="/guide">guide</a>. You can also use any software you want to design the PCB, but we recommend using Figma, KiCad, or EasyEDA.
          </h3>
          <ThreeGrid />
          <h3 className="mt-6 font-inter font-bold text-lg md:text-2xl drop-shadow-md sm:px-8 md:px-16 lg:px-[9rem]">
            At the end, submissions will be peer-reviewed and voted for the top 3. The top 3 designs will be re-made and can be given out as gifts! Winners will also receive special recognition and a feature on our website. Don't miss this chance to showcase your creativity and spread holiday cheer with your unique PCB decorations!
          </h3>
          <h3 className="mt-6 font-inter font-bold text-lg md:text-2xl drop-shadow-md sm:px-8 md:px-16">
            FAQ:
          </h3>
          {/* FAQ Section */}
          <Grid columns = {[1, 1, 1, 3]}gap = {[0]} sx = {{paddingTop: '1.5vh'}}>
            <FAQcard
              question="What can I Make?"
              answer="You can make a PCB that celebrates any holiday you would like! Including but not limited to: Christmas, New Years, Diwali, and Hanukkah! It can also be something Festivus."
            />
            <FAQcard
              question="When are Submission deadlines?"
              answer="The deadline to submit is the 30th. If you want your decoration in time for Christmas, submit before the 15th!"
            />
            <FAQcard
              question="What about the OnBoard Grant?"
              answer="You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design."
            />
            <FAQcard
              question="How can I get help?"
              answer="Join huddles/calls on the Slack or ask in the #electronics channel on Slack."
            />
            <FAQcard
              question="What if I need to use standard assembly only parts?"
              answer="A limited handful of people will be eligible to have their PCB hand soldered by a Hack Club staff member. You can apply for it on a form."
            />
            <FAQcard
              question="How do I submit my design?"
              answer="Submit your design via a pull request (PR) to the OnBoard repository before the deadline."
            />
          </Grid>

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
