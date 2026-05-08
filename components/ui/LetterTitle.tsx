"use client";

import { useEffect, useRef } from "react";

export function LetterTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.letterReady) return;
    el.dataset.letterReady = "true";
    el.setAttribute("aria-label", text);

    let letterIndex = 0;
    el.innerHTML = text
      .split(" ")
      .map((word) => {
        const letters = Array.from(word)
          .map((char) => {
            const delay = letterIndex * 34;
            letterIndex += 1;
            return `<span class="hero-title-letter" aria-hidden="true" style="--letter-delay: ${delay}ms">${char}</span>`;
          })
          .join("");
        return `<span class="hero-title-word" aria-hidden="true">${letters}</span>`;
      })
      .join(" ");
  }, [text]);

  return (
    <h1 ref={ref} data-letter-title={text}>
      {text}
    </h1>
  );
}
