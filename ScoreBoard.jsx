import { useGame } from "../Components/GameContext";

export default function ScoreBoard() {
  const { score, endGame } = useGame();
  return (
    <div className="scoreboard">
      <h3>Score: {score}</h3>
      <button onClick={endGame}>End Game</button>
    </div>
  );
}
