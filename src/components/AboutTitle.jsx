import React from "react";

function AboutTitle(props) {
  return (
    <div className="">
      <div className="text-left mt-10 animation-fadein ml-10 pr-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 md:text-5xl lg:text-5xl text-white">
          Nice to meet you, I'm Sean.
        </h1>
        <p className="text-sm md:text-normal lg:text-lg mt-6 text-base text-zinc-400 leading-6 leading-relaxed lg:pb-32 md:pb-10">
            In 2019, at the age of 13, I embarked on a self-taught programming
          journey. It all started with a simple "Hello World" program in Python,
          and I can still recall the sheer amazement it brought me. Programming
          opened a new world of excitement, expanding my horizons and propelling
          my development forward. From basic rock-paper-scissors games to
          building full-stack web applications, I immersed myself in learning
          languages, grasping concepts, and acquiring skills.
          <p className="pt-4">
            Now, equipped with a diverse range of skills I've accumulated over
            time, this website stands as a testament to my progress. However, my
            journey and passion for technology continue to drive me forward. I
            aspire to explore various avenues within the tech industry and
            expand my expertise. If you have any questions or opportunities,
            please feel free to reach out. I am always happy to talk.
          </p>
        </p>
      </div>
    </div>
  );
}

export default AboutTitle;
