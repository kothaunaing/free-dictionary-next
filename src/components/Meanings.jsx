import Link from "next/link";
import React from "react";
import Synonyms from "@/components/Synonyms";
import Antonyms from "@/components/Antonyms";

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
            <div className="ml-4 space-y-[8px]">
              {meaning.definitions.map((definition, k) => {
                return (
                  <div
                    key={`word-${i}-meaning-${j}-definition-${k}`}
                    className="mb-2 border-b p-2 border-slate-600"
                  >
                    <p>
                      {definition.definition
                        .split(" ")
                        .map((word, wordIndex) => {
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
                    {definition?.example && (
                      <p className="text-blue-500">
                        {"Eg. "}
                        {definition.example
                          .split(" ")
                          .map((word, wordIndex) => {
                            const wordOnly = word.replace(/[.,;!?()"']/g, "");

                            return (
                              <Link
                                key={`word-${i}-meaning-${j}-example-${k}-${wordIndex}-${word}`}
                                href={`/word/${wordOnly}`}
                                className="hover:underline"
                              >
                                <span>{word} </span>
                              </Link>
                            );
                          })}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            {meaning?.synonyms?.length !== 0 ? (
              <Synonyms synonyms={meaning.synonyms} j={j} i={i} />
            ) : null}
            {meaning?.antonyms?.length !== 0 ? (
              <Antonyms antonyms={meaning.antonyms} j={j} i={i} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Meanings;
