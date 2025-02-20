import Link from "next/link";
import React from "react";

const Meanings = ({ word, i }) => {
  return (
    <div className="space-y-4">
      {word.meanings.map((meaning, j) => {
        return (
          <div key={`word-${i}-meaning-${j}`}>
            <p className="italic text-2xl flex gap-2">
              {j + 1}
              <span className="text-lg italic">{meaning.partOfSpeech}</span>
            </p>
            <div className="ml-4 space-y-[5px]">
              {meaning.definitions.map((definition, k) => {
                return (
                  <p key={`word-${i}-meaning-${j}-definition-${k}`}>
                    {definition.definition.split(" ").map((word, wordIndex) => {
                      const wordOnly = word.replace(/[.,;!?()"']/g, "");

                      return (
                        <Link
                          key={`word-${i}-meaning-${j}-definition-${k}-${wordIndex}-${word}`}
                          href={`/word/${wordOnly}`}
                          className="hover:underline"
                        >
                          <span>{word} </span>
                        </Link>
                      );
                    })}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meanings;
