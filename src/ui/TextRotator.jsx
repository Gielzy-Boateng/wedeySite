import { useEffect, useState } from "react";

const TextRotator = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(
    function () {
      const places = [
        "Kejetia",
        "Agbogbloshie",
        "Circle",
        "Kaneshie",
        "Kantamanto",
        "Africa",
        "ForYou",
      ];

      const CurrentPlace = places[textIndex];

      if (letterIndex < CurrentPlace.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText + CurrentPlace[letterIndex]);
          setLetterIndex(letterIndex + 1);
        }, 200);

        return () => clearInterval(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTextIndex((textIndex) => (textIndex + 1) % places.length);
          setLetterIndex(0);
          setDisplayedText("");
        }, 200);
        return () => clearInterval(timeout);
      }

      // const timer = setInterval(() => {

      // }, 2000);
    },
    [letterIndex, textIndex, displayedText]
  );

  return (
    <p className="text-[16px] font-lightbold text-white bg-[#00000038] inline-block py-2 px-4 rounded-full">
      #WeDey
      <span>{displayedText}</span>
    </p>
  );
};

export default TextRotator;
