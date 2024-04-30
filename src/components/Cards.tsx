'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

const testimonials = [
  {
    quote:
      "Working in the field of IT has been both challenging and rewarding. The constant evolution of technology keeps me on my toes, but the satisfaction of solving complex problems and creating innovative solutions makes it all worthwhile.",
    name: "John Smith",
    title: "Software Engineer",
  },
  {
    quote:
      "In the world of computer science, every line of code is an opportunity to make a difference. As a developer, I have the power to build tools that shape the future and improve people's lives.",
    name: "Emily Johnson",
    title: "Web Developer",
  },
  {
    quote:
      "As a cybersecurity specialist, I'm tasked with protecting valuable data and ensuring the security of digital systems. It's a challenging yet vital role in today's interconnected world.",
    name: "Michael Lee",
    title: "Cybersecurity Analyst",
  },
  {
    quote:
      "The world of artificial intelligence is full of possibilities. As a machine learning engineer, I get to explore cutting-edge technologies and work on projects that push the boundaries of what's possible.",
    name: "Sophia Chen",
    title: "Machine Learning Engineer",
  },
  {
    quote:
      "As a data scientist, I'm passionate about turning raw data into actionable insights. It's exciting to uncover patterns and trends that can drive decision-making and lead to business success.",
    name: "David Rodriguez",
    title: "Data Scientist",
  },
];


function Cards() {
  return (
    <div className="h-[40rem] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h2 className={cn("md:text-4xl text-xl text-white relative z-20 text-center")}>
        Hear our Harmony : Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 mt-20">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards