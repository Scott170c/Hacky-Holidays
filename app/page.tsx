"use client";

import { useEffect } from "react";
import Snowfall from "react-snowfall";
import Footer from "./components/common/Footer";
import Top from "./components/Top";
import FAQCard from "./components/FAQCard";
import Steps from "./components/Steps";

export default function Home() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			import("@google/model-viewer");
		}
	}, []);

	return (
		<div>
			<link
				rel="icon"
				href="https://assets.hackclub.com/icon-rounded.svg"
			></link>

			{/* Snowfall effect */}
			<Snowfall
				speed={[0.5, 3]}
				radius={[2.0, 4.0]}
				snowflakeCount={100}
				wind={[-0.1, 0.1]}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 1,
				}}
			/>

			{/* Main Content */}
			<div className="grid gap-0 bg-gradient-to-b from-[rgba(0,153,255,1)] to-[rgba(130,205,255,1)] md:h-[100%] relative z-0">
				{/* Header Section */}
				<div className="absolute top-0 left-0">
					<a
						href="https://hackclub.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button>
							<img
								src="https://assets.hackclub.com/flag-orpheus-top.svg"
								className="h-20"
								alt="Hack Club Flag"
							/>
						</button>
					</a>
				</div>

				<Top />
				<div className="pt-8 sm:px-8 md:px-18 lg:px-[9rem]">
					<div className="flex flex-col items-center justify-center text-white px-4 md:px-20">
						<h3 className="font-inter font-bold text-lg md:text-2xl drop-shadow-md">
							This holiday season make a festive themed PCB design of one of the
							many holidays taking place, Christmas, New Years, Diwali,
							Hanukkah, or others! Design a PCB that commemorates and showcases
							your interest in electronics using LEDs, sensors and more. The PCB
							can be a decoration, a gift, or anything else you can think of!
							<br></br>
							<br></br>
							Your PCB can be as simple or as complex as you want, to help you
							get started we have some example designs and reference schematics
							location in our{" "}
							<a href="/guide" className="text-[#bae6fd] underline">
								guide
							</a>
							.{" "}
						</h3>
					</div>

					<Steps />

					<div className="flex flex-col justify-center p-4 md:p-6 lg:p-8 w-full mx-auto bg-transparent px-4 md:px-16 text-lg md:text-xl lg:text-2xl font-semibold text-center md:flex-row items-center gap-4">
						<p className="font-inter text-white md:text-left mb-4">
							Want something a little simplier to learn the basics, or just in
							need of some inspiration? <br></br>
							Check out Hack Club Jams which you'll find amazing guides made by
							the community.{" "}
						</p>
						<a
							href="https://jams.hackclub.com/tag/pcb"
							className="inline-block px-8 py-3 text-base font-medium leading-6 text-center text-white transition bg-blue-500 bg-opacity-75 rounded-lg shadow hover:bg-opacity-100 hover:bg-blue-600 focus:outline-none focus:ring align-middle justify-center"
						>
							Hack Club Jams
						</a>{" "}
					</div>

					{/* FAQ Section */}
					<div className="flex flex-col items-center justify-center text-white px-8">
						<h2 className="font-inter text-white text-2xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-left mb-4">
							Frequently Asked Questions
						</h2>
						<div
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 inherit-padding-right"
							style={{ paddingRight: "inherit" }}
						>
							<FAQCard
								question="What are the first steps?"
								answer="After deciding on the theme or holiday of your PCB, start brainstorming possible features and ideas for it. We'll help you along the way by providing guidance through Slack huddles and with our guide to use as a reference schematic."
							/>
							<FAQCard
								question="When is submission deadline?"
								answer="The hard deadline is January 20th, but we recommend submitting much earlier to get your PCB before then!"
							/>
							<FAQCard
								question="What about the OnBoard Grant?"
								answer="You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design."
							/>
							<FAQCard
								question="What programs can I use to make my PCB?"
								answer={
									<>
										We allow both KiCad and EasyEDA projects, however we
										strongly recommend people submit with KiCad. As a bonus,
										check out the{" "}
										<a
											href="https://github.com/hackclub/kicad-wakatime"
											className="text-blue-500 underline"
										>
											KiCad-Wakatime
										</a>{" "}
										plugin to earn doubloons for High Seas.
									</>
								}
							/>
							<FAQCard
								question="What if my PCB is complex, and features a large variety of components or requires Standard Assembly?"
								answer={
									<>
										A limited handful of people will be eligible to have their
										PCB hand soldered by a Hack Club staff member. You can apply
										for it on a form. Apply{" "}
										<a
											href="https://airtable.com/shr3Z6Z9Z9Z9Z9Z9Z"
											className="text-blue-500 underline"
										>
											here
										</a>{" "}
										for the service.
									</>
								}
							/>
							<FAQCard
								question="How do I submit my design?"
								answer="Submit your design via a pull request (PR) to the OnBoard repository before the deadline."
							/>
						</div>{" "}
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
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
