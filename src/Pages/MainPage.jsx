import { useMemo, useState } from "react";
import useTikTokToe from "../Hooks/useTikTokToe"
import ScoreBoard from "../components/ScoreBoard";
import TicTacToe from "../components/TicTacToe";
import GameOver from "../components/GameOver";
import RulesCard from "../components/RulesCard";

const MainPage = () => {
  const { gameWinner, board, resetGame, getStatusMassage, handleClick }
    = useTikTokToe();
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [xScore, setXscore] = useState(0);
  const [oScore, setOscore] = useState(0);
  const restartGame = () => {
    setXscore(0);
    setOscore(0);
    resetGame()
  }
  useMemo(() => {
    gameWinner && gameWinner === "X" && setXscore(xScore + 1);
    gameWinner && gameWinner === "O" && setOscore(oScore + 1)
  }, [gameWinner])
  return (
    <div className="pagecontainer">
      <div className="section">
        {xScore >= 3 ? <GameOver player={"X"} /> :
          oScore >= 3 ? <GameOver player={"O"} /> :
            <TicTacToe
              isAutoPlay={isAutoPlay}
              getStatusMassage={getStatusMassage}
              resetGame={resetGame}
              board={board}
              handleClick={handleClick}
            />}
      </div>
      <div className="section">
        <ScoreBoard
          isAutoPlay={isAutoPlay}
          setIsAutoPlay={setIsAutoPlay}
          xScore={xScore}
          oScore={oScore}
          restartGame={restartGame}
        />
        <RulesCard />
      </div>
    </div>
  )
}

export default MainPage

