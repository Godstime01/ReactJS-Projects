import React from 'react'
import { useContext, useEffect } from "react"
import { PlayerMoveContext, PlayerScoreContext } from "../App"
import { make_computer_move, check_winner } from '../../utils'
import { motion } from 'framer-motion'
import Button from './Button'
import { buttonData } from './ButtonGroup'


const SelectedOption = () => {

    // get the player's move
    const { PlayerMove, setPlayerMove } = useContext(PlayerMoveContext);
    const { playerScore, setPlayerScore } = useContext(PlayerScoreContext);

    const choices = ['paper', 'scissors', 'rock']

    // get computer's chouce
    const computerChoice = make_computer_move()

    const playerMoveIndex = choices.indexOf(PlayerMove.toLowerCase())

    const computerButtonData = buttonData[computerChoice]
    const playerButtonData = buttonData[playerMoveIndex]

    console.log(playerButtonData)

    const result = check_winner(playerMoveIndex, computerChoice)

    useEffect(() => {
        // computer = 2, human = 1, draw = 0
        if (result == 2) {
            setPlayerScore(playerScore > 0 ? playerScore - 1 : 0)
        } else if (result == 1) {
            setPlayerScore(playerScore + 1)
        }
    }, [])

    return (

        <motion.div className='result-screen'
            initial={{ opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300 }}
            transition={{ duration: 2 }}
        >
            {/* player div */}
            <div>
                <h2>You Picked</h2>

                <Button {...playerButtonData} />

            </div>

            {/* result section */}
            <div>
                <h2 className='result'>{
                    result === 0 ? "Draw" : result === 2 ? "You lose" : "You win"
                }</h2>
                <button className="play-again-btn" onClick={() => setPlayerMove(null)}>Play Again</button>
            </div>

            {/* computer div */}
            <div>
                <h2>The house picked</h2>

                <Button {...computerButtonData} />

            </div>
        </motion.div>

    )
}

export default SelectedOption