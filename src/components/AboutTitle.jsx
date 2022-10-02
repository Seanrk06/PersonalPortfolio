import React from "react";

function AboutTitle(props) {
  return (
    <div className="">
      <div className="text-left mt-10 animation-fadein ml-10 pr-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 md:text-5xl lg:text-5xl text-white">
          I'm Sean Klein and below is my story from start to finish.
        </h1>
        <p className="text-sm md:text-normal lg:text-lg mt-6 text-base text-zinc-400 leading-6 leading-relaxed lg:pb-32 md:pb-10">
          I started programming in 2019 at 13 years old. When I first began, I
          remember the feeling of amazement when I wrote my first program in
          Python which printed "Hello World." From then on my journey has
          continued. I went from learning basic logic to the difference between
          bools and ints. Programming was new experience for me that opened my
          horizions and as a result I quickly developed. I learned languages,
          concepts, and skills that took me from basic rock paper scissors
          programs to full-stack web applications.
          <p className="pt-4">
            This is where I am now at the time of making this website
            which makes use of all sorts of web technologies I've learned. Even
            though I have come so far I plan to continue this journey and
            passion by applying myself in different technology-related avenues.
            Please reach out to me if you have any questions or opportunities as
            I am always happy to talk.
          </p>
        </p>
      </div>
    </div>
  );
}

export default AboutTitle;
