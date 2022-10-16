import React from "react";

function AboutTitle(props) {
  return (
    <div className="">
      <div className="text-left mt-10 animation-fadein ml-10 pr-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 md:text-5xl lg:text-5xl text-white">
          I'm Sean Klein. Below is my journey so far.
        </h1>
        <p className="text-sm md:text-normal lg:text-lg mt-6 text-base text-zinc-400 leading-6 leading-relaxed lg:pb-32 md:pb-10">
          I started programming in 2019 at 13 years old. I started with a basic
          "Hello World" program in Python and I still remember the feeling of
          amazement I had from it. Programming was a new exciting experience for
          me that opened my horizons and as a result, I quickly developed. I
          learned languages, concepts, and skills that took me from basic rock
          paper scissors games to full-stack web applications.
          <p className="pt-4">
            I am now at the point where I can use all of the skills I have
            picked up over time and this website is the culmination of them. Even
            though I have come far, I plan to continue this journey and passion
            by applying myself in different technology-related avenues. Please
            reach out to me if you have any questions or opportunities, I am
            always happy to talk.
          </p>
        </p>
      </div>
    </div>
  );
}

export default AboutTitle;
