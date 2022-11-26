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
          Hi I'm Sean, a junior in high school and self taught developer. I'm interested in any opportunity
          that allows me to expand my skills and learn. Please reach out if you
          have any questions!
        </p>

        <IconRow />
      </div>
    </div>
  );
}

export default Header;
