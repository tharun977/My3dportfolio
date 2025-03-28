import React from "react";

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[26px] md:text-[32px] 2xl:text-[48px] leading-[32px] md:leading-[40px] w-full flex flex-col justify-center items-center text-center">
      <div className="absolute flex flex-col gap-2 sm:gap-3" style={{ top: "30px" }}>
        <div className="flex" aria-label="Computer Science Student">
          {produceSpans("Computer Science Student", "animate-textRotate1")}
        </div>
        <div className="flex" aria-label="AI and ML Enthusiast">
          {produceSpans("AI and ML Enthusiast", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
