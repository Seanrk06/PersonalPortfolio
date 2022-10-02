import React from "react";

function AboutTitle(props) {
  return (
    <div className="">
      <div className="text-left mt-8 animation-fadein ml-10">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 md:text-5xl lg:text-5xl text-white">
          My name is Sean Klein and below is my journey up to this point.
        </h1>
        <p className="text-sm md:text-normal lg:text-lg mt-6 text-base text-zinc-400 leading-6 leading-relaxed">
          I started programming in 2019 at 13 years old. When I first started, I
          remember the feeling of amazement when I wrote my first program in
          Python, and it returned to me, "Hello World." From then on my journey
          has continued. I went from learning basic logic to the difference
          between bools and ints. Learning expanded my world like I had not
          experienced before. I quickly developed my repertoire of languages,
          concepts, and skills to go from basic rock paper scissors programs to
          full-stack web applications. 
          <p className="text-sm md:text-normal lg:text-lg pt-4">
          This is where I am now at the time of
          making this website (10/1/22) which makes use of all sorts of web
          technologies I've learned over the course of years. Even though I have
          come so far I plan to continue this journey and passion by applying
          myself in different technology-related avenues. Please reach out to me
          if you have any questions or opportunities I am always happy to talk.
          </p>
        </p>
      </div>
    </div>
  );
}

export default AboutTitle;
