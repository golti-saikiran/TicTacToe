const ScoreBoard = ({ isAutoPlay, setIsAutoPlay, xScore, oScore, restartGame }) => {

  return (
    <>
      <div>
        <input type="checkbox" checked={isAutoPlay} id="autoPlayCheckBox" onChange={() => setIsAutoPlay(!isAutoPlay)} />
        <label htmlFor="autoPlayCheckBox"> Play with Computer</label>
      </div>
      <div className='scorecard'>
        <span className="player">{`X - ${xScore}`}</span>
        <span className="player">{`O - ${oScore}`}</span>
        {xScore >= 3 || oScore >= 3 ?
          <button className='btn' onClick={() => restartGame()}>Restart</button> : ""}
      </div>
    </>
  )
}

export default ScoreBoard
