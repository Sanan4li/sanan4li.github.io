"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 35,
  pause = 1800,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? currentWord.slice(0, text.length - 1)
              : currentWord.slice(0, text.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="font-mono-hack text-matrix-400">
      {text}
      <span className="cursor-blink">▌</span>
    </span>
  );
}
