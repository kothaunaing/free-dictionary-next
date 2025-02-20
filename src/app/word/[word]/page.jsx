import { fetchWord } from "@/lib/api/words";
import Pronunciations from "@/components/Pronunciations";
import React from "react";
import Meanings from "@/components/Meanings";
import { InfoIcon } from "lucide-react";

export async function generateMetadata({ params }, parent) {
  const { word } = await params;

  const { wordDetails } = parent;

  try {
    return {
      title: `Free Dictionary | ${word}`,
      description: `Definitions for "${word}"`,
    };
  } catch (error) {
    if (wordDetails) {
      return {
        title: `Free Dictionary | Not found for "${word}"`,
        description: `No word found for ${word}`,
      };
    } else {
      return {
        title: "Error fetching data!",
      };
    }
  }
}

const Word = async ({ params }) => {
  const { word } = await params;

  let wordDetails;

  try {
    wordDetails = await fetchWord(word);
    generateMetadata({ params }, { wordDetails });

    // console.log(wordDetails);

    return (
      <main className="w-full max-w-3xl mx-auto">
        <div className=" m-2 ">
          <div className="space-y-8 mt-4">
            {wordDetails.map((word, i) => {
              return (
                <div key={`word-${i}`}>
                  <div className="">
                    <h1 className="text-3xl font-semibold">
                      {word.word}
                      <span className="text-lg font-normal ml-1">
                        {word.phonetic}
                      </span>
                    </h1>
                    <Pronunciations phonetics={word.phonetics} index={i} />
                    <Meanings i={i} word={word} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.log("Error in Word: " + error.message);
    return (
      <main className="max-w-3xl w-full mx-auto">
        <div className="m-2">
          {wordDetails ? (
            <div className="flex flex-col items-center">
              <p className="flex items-center gap-2 mb-2">
                <InfoIcon />
                <span className="font-bold text-2xl">{wordDetails?.title}</span>
              </p>
              <p className="text-sm mb-1">{wordDetails?.message}</p>
              <p className="text-sm">{wordDetails?.resolution}</p>
            </div>
          ) : (
            <p className="text-center font-bold text-red-700">
              Error fetching data!
            </p>
          )}
        </div>
      </main>
    );
  }
};

export default Word;
