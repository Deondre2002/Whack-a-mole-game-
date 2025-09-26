import { useGame } from "../Components/GameContext";
import ScoreBoard from "./ScoreBoard";
import Hole from "./Hole";

export default function GameBoard() {
  const { moleIndex } = useGame();
  const holes = Array(9).fill(null);

  return (
    <div className="Game">
      <ScoreBoard />
      <div className="holes">
        {holes.map((_, index) => (
          <Hole key={index} hasMole={index === moleIndex} />
        ))}
      </div>
    </div>
  );
}
