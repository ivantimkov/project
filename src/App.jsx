import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

import { SettingsProvider } from "./context/SettingsContext";
import SettingsForm from "./components/SettingsForm";
import GameOverPortal from "./components/GameOverPortal";
import CookiePopup from "./components/CookiePopup";

function App() {
  const [page, setPage] = useState("start");

  const [showSettings, setShowSettings] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStats, setGameStats] = useState(null);

  // щоб створювати нову гру (перезапуск useWord)
  const [gameKey, setGameKey] = useState(1);

  return (
    <SettingsProvider>
      <div className="app-container">

        {page === "start" && (
          <StartPage
            onStart={() => {
              setGameKey(gameKey + 1); // очищає слово
              setPage("game");
            }}
            onOpenSettings={() => setShowSettings(true)}
          />
        )}

        {page === "game" && (
          <GamePage
            key={gameKey}
            onFinish={(stats) => {
              setGameStats(stats);
              setIsGameOver(true);
            }}
          />
        )}

        {page === "result" && (
          <ResultPage
            result={gameStats}
            onRestart={() => {
              setGameKey(gameKey + 1);
              setPage("game");
            }}
          />
        )}

        {showSettings && (
          <SettingsForm onClose={() => setShowSettings(false)} />
        )}

        <GameOverPortal
          isOpen={isGameOver}
          stats={gameStats}
          onClose={() => {
            setIsGameOver(false);
            setPage("result");
          }}
          onNext={() => {
            setIsGameOver(false);
            setGameKey(gameKey + 1); // нове слово
            setPage("game");
          }}
        />
      </div>
      <CookieConsent />
    </SettingsProvider>
  );
}

export default App;