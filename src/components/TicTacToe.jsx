const TicTacToe = ({ isAutoPlay, getStatusMassage, resetGame, board, handleClick }) => {

  return (
    <>
      <div className='messageBar'>
        <div>{isAutoPlay ? "You are player X " : getStatusMassage()}</div>
        <button className='btn' onClick={() => resetGame()}>Replay</button>
      </div>
      <div className='board'>
        {board.map((b, i) => {
          return <button className='cell' key={i}
            onClick={() => handleClick(i, isAutoPlay)}
            disabled={b !== null}>{b}</button>
        })}
      </div>
    </>
  )
}

export default TicTacToe
