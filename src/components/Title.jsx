import React from "react";

function Title(props) {
  return (
    <div className="grid grid-rows-1 col-2 mt-10">
      <div className="text-center mt-8 animation-fadein">
        <h1 className="text-4xl m-5 font-bold tracking-tight text-zinc-800 sm:text-5xl text-white">
          {props.heading}
        </h1>
        <p className="mt-6 text-base text-zinc-400 ml-5 mt-8 leading-6">
          {props.body}
        </p>
      </div>
    </div>
  );
}

export default Title;
