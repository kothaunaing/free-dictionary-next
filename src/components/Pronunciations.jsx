"use client";

import Audio from "@/components/Audio";
import React from "react";

const Pronunciations = ({ phonetics, index }) => {
  return (
    <div className="mt-2 mb-2 space-y-1">
      {phonetics.map((phonetic, i) => {
        if (phonetic.audio?.trim()) {
          return (
            <Audio key={`word-${index}-phonetic-${i}`} phonetic={phonetic} />
          );
        }
      })}
    </div>
  );
};

export default Pronunciations;
