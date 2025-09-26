import { GameProvider, useGame } from "./Components/GameContext";
import WelcomeScreen from "./Components/WelcomeScreen";
import GameBoard from "./Components/GameBoard";

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

function AppContent() {
  const { started } = useGame();

  return started ? <GameBoard /> : <WelcomeScreen />;
}
