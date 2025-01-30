const ScoreBoard = ({ isAutoPlay, setIsAutoPlay, xScore, oScore, restartGame }) => {

  return (
    <>
      <div className="checkbox">
        <input type="checkbox" checked={isAutoPlay} id="autoPlayCheckBox" onChange={() => setIsAutoPlay(!isAutoPlay)} />
        <label htmlFor="autoPlayCheckBox"> Play with Computer</label>
      </div>
      <div className='scorecard'>
        <span className="player">{`X - ${xScore}`}</span>
        <span className="player">{`O - ${oScore}`}</span>
      </div>
      {xScore >= 3 || oScore >= 3 ?
          <button className='btn' onClick={() => restartGame()}>Restart</button> : ""}
    </>
  )
}

export default ScoreBoard
