import { useGame } from "../Components/GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();
  return (
    <div className="welcome">
      <h1>Whack-A-Mole</h1>
      <p> Whack the mole to win!</p>
      <button onClick={startGame}>Start Game!</button>
    </div>
  );
}
