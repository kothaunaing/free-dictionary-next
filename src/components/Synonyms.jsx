import Link from "next/link";
import React from "react";

const Synonyms = ({ synonyms, i, j }) => {
  return (
    <div className="p-2">
      <h2 className="font-semibold text-lg">Synomyms</h2>
      {synonyms.map((word, index) => {
        return (
          <Link
            key={`word-${i}-meaning-${j}-synonym-${index}`}
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

export default Synonyms;
