const RulesCard = () => {
    return (
        <div className="rulescard">
            <h3 style={{ paddingLeft: "10px" }}>Rules to play</h3>
            <ul>
                <li>You are player X, and your friend (or the computer if you choose) is O.</li>
                <li>Players take turns putting their marks in empty squares. </li>
                <li>The first player to get 3 of the marks in a row (horizotally, vertically or diagonally) is the winner.</li>
                <li>When all 9 squares are full, the set is tie, so need to play again.</li>
                <li>The first player who wins the 3 sets is the winner of the game</li>
            </ul>
            <p></p>



        </div>
    )
}

export default RulesCard
