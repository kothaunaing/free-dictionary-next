"use client";

import { Volume2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Audio = ({ phonetic }) => {
  const audioUrl = phonetic.audio;
  const urlParts = audioUrl.split("/");
  const fileName = urlParts[urlParts.length - 1];
  const fileNameParts = fileName.split(".");
  const firstPart = fileNameParts[0];
  const isUK = firstPart.split("-")[1] === "uk";

  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new window.Audio(audioUrl));
    }
  }, [audioUrl]);

  const playAudio = () => {
    if (audio) {
      audio.src = audioUrl;
      audio.play();
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <span className="text-lg font-normal ">{phonetic.text}</span>
      <span>{isUK ? "UK" : "US"}</span>
      <button onClick={playAudio} className="hover:opacity-70">
        <Volume2Icon />
      </button>
    </div>
  );
};

export default Audio;
