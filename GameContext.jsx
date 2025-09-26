import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(Math.floor(Math.random() * 9));

  function startGame() {
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
    setStarted(true);
  }

  function endGame() {
    setStarted(false);
    setScore(0);
  }

  function whackMole() {
    setScore((prev) => prev + 1);
    setMoleIndex(Math.floor(Math.random() * 9));
  }

  return (
    <GameContext.Provider
      value={{ started, score, endGame, moleIndex, startGame, whackMole }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
