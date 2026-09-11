"use client";

import { useEffect, useState } from "react";

const COLORS = ["#2a81f2", "#f2b705", "#f2426a", "#05c793", "#a05cf2"];

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  width: number;
  height: number;
};

const PIECES_COUNT = 70;

const Confetti = () => {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: PIECES_COUNT }, (_, id) => ({
        id,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2.5,
        color: COLORS[id % COLORS.length],
        width: 6 + Math.random() * 6,
        height: 12 + Math.random() * 10,
      })),
    );
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0 block animate-confetti-fall rounded-sm"
          style={{
            left: `${piece.left}%`,
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
