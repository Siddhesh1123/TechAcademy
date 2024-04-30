'use client'
import Link from 'next/link';
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "DevCon",
    description:
      "Join the largest virtual conference for developers worldwide. Explore the latest trends in software engineering, IT infrastructure, and computer science.",
    link: "https://devcon.com",
  },
  {
    title: "CodeCamp",
    description:
      "Discover cutting-edge techniques and best practices in coding. Dive deep into web development, data science, and cybersecurity at this immersive online event.",
    link: "https://codecamp.com",
  },
  {
    title: "TechTalks",
    description:
      "Attend insightful sessions led by industry experts. Learn about emerging technologies, cloud computing, and artificial intelligence in these interactive webinars.",
    link: "https://techtalks.com",
  },
  {
    title: "FutureTech",
    description:
      "Get a glimpse into the future of technology. Explore topics such as blockchain, machine learning, and IoT in these forward-thinking engineering seminars.",
    link: "https://futuretech.com",
  },
  {
    title: "CodeConf",
    description:
      "Connect with fellow developers and tech enthusiasts. Participate in workshops, panel discussions, and live coding sessions at this premier software engineering conference.",
    link: "https://codeconf.com",
  },
  {
    title: "InnovateIT",
    description:
      "Stay ahead of the curve with the latest innovations in IT. Join thought leaders and industry pioneers as they discuss the future of IT infrastructure and digital transformation.",
    link: "https://innovateit.com",
  },
];


function UpcomingWebinar() {
  return (
    <div className="p-3 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg text-purple-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold  text-white sm:text-4xl tracking-tight">
            Learn with the Best
          </p>
        </div>
        <div className="mt0-10">
          <HoverEffect items={projects} />
        </div>
        <div className="mt-20 text-center">
          <Link href={"/courses"}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View all Webinars
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar