import { useEffect, useMemo, useState } from 'react'

const useTikTokToe = () => {
    const initialValue = Array(9).fill(null);
    const [board, setBoard] = useState(initialValue);
    const [isXNext, setIsXNext] = useState(true);
    const [gameWinner, setGameWinner] = useState(null);
    const [isAuto, setIsAuto] = useState(false);

    const autoPositionSelector = (board) => {
        const validCheck = board.filter(b => {
            return b == null
        })
        let position
        if (validCheck.length >= 2) {
            position = Math.floor(Math.random() * 10);
            while (board[position] !== null) {
                position = Math.floor(Math.random() * 10);
            }
        }
        return position
    }

    useEffect(() => {
        if (isAuto) {
            const pos = autoPositionSelector(board)
            const newBoard = [...board];
            newBoard[pos] = "O"
            setBoard(newBoard);
            setIsAuto(false);
            setIsXNext((prev) => !prev);
        }
    }, [board])

    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const calculateWinner = () => {
        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
    }

    useMemo(() => {
        const winner = calculateWinner()
        setGameWinner(winner);
    }, [board])

    const resetGame = () => {
        setBoard(initialValue);
        setIsXNext(true);
    }

    const getStatusMassage = () => {
        const winner = calculateWinner();
        if (winner) {
            return `Player ${winner} win`
        }

        if (!board.includes(null)) {
            return 'Match draw replay again...'
        }
        return `It's player ${isXNext ? "X" : "O"} turn`
    }

    const handleClick = (i, isAutoPlay) => {
        const winner = calculateWinner();
        if (winner || board[i] !== null) {
            return
        }
        const newBoard = [...board];
        newBoard[i] = isXNext ? "X" : "O";
        setBoard(() => newBoard);
        setIsXNext((prev) => !prev);
        if (isAutoPlay) {
            setIsAuto(true)
        }
    }

    return { gameWinner, board, resetGame, getStatusMassage, handleClick, calculateWinner }
}
export default useTikTokToe;