import { useGame } from "../Components/GameContext";

export default function Mole() {
  const { whackMole } = useGame();
  return (
    <div className="mole" onClick={whackMole}>
      text
    </div>
  );
}
