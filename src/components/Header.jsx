import React from "react";
import Typewriter from "typewriter-effect";
import IconRow from "./IconRow";

function Header() {
  return (
    <div className="grid grid-rows-1 col-2">
    <div className="max-w-2xl mt-8">
      <h1 className="text-4xl m-5  font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
        <Typewriter
          options={{
            strings: [
              "Aspiring Web Devloper",
              "Tech Enthusiast",
              "Robotic",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 ml-5 mt-8 leading-6">
        I’m Spencer, a software designer and entrepreneur based in New
        York City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their
        own terms.
      </p>

      <IconRow/>
    </div>
  </div>
  );
}

export default Header;
