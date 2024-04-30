"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "Engineering Collaboration",
    description:
      "Work together in real time with your engineering team, clients, and stakeholders. Collaborate on projects, share ideas, and make decisions quickly. With our platform, you can streamline your engineering workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Engineering Collaboration
      </div>
    ),
  },
  {
    title: "Real-time Engineering Updates",
    description:
      "See engineering changes as they happen. With our platform, you can track every engineering modification in real time. No more confusion about the latest version of your engineering project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Real-time Engineering Updates
      </div>
    ),
  },
  {
    title: "Engineering Version Control",
    description:
      "Experience real-time updates and never stress about engineering version control again. Our platform ensures that you're always working on the most recent version of your engineering project, eliminating the need for constant manual updates. Stay in the loop, keep your engineering team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
        Engineering Version Control
      </div>
    ),
  },
  {
    title: "Engineering Innovation",
    description:
      "Experience real-time updates and never stress about engineering version control again. Our platform ensures that you're always working on the most recent version of your engineering project, eliminating the need for constant manual updates. Stay in the loop, keep your engineering team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--green-500))] flex items-center justify-center text-white">
        Engineering Innovation
      </div>
    ),
  },
];


function Scroller() {
    return (
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    );
}

export default Scroller;
