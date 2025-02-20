import Link from "next/link";
import React from "react";

const Antonyms = ({ antonyms, i, j }) => {
  return (
    <div className="p-2">
      <h2 className="font-semibold text-lg">Antonyms</h2>
      {antonyms.map((word, index) => {
        return (
          <Link
            key={`word-${i}-meaning-${j}-antonym-${index}`}
            className="hover:underline"
            href={`/word/${word}`}
          >
            {word},{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Antonyms;
