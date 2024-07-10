import React from "react";
import Typewriter from "typewriter-effect";
import IconRow from "./IconRow";

function Header() {
  return (
    <div className="grid grid-rows-1 col-2">
      <div className="max-w-2xl mt-8">
        <h1 className="text-4xl ml-5 mt-16 font-bold tracking-tight text-zinc-800 sm:text-5xl text-white">
          <Typewriter
            options={{
              strings: ["Developer", "Student", "Designer", "Engineer"],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          />
        </h1>
        <p className="text-base text-gray-500 ml-5 mt-10 leading-6">
          Hi, I'm Sean, a current freshman at Purdue University and a
          self-taught developer specializing in website design. I'm passionate
          about expanding my skills and learning through real-world projects. If
          you're looking for a dedicated and eager web designer to bring your
          ideas to life, I'd love to help! Feel free to reach out with any
          questions or project ideas.
        </p>
        <p className="text-base text-gray-500 ml-5 mt-5 leading-6">
          Looking forward to collaborating with you!
        </p>

        <IconRow />
      </div>
    </div>
  );
}

export default Header;
