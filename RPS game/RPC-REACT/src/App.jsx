import { createContext, useState } from 'react';
import Header from './components/Header';
import ButtonGroup from './components/ButtonGroup';
import './App.css';


export const PlayerMoveContext = createContext()
export const PlayerScoreContext = createContext()


function App() {


  const [ PlayerMove, setPlayerMove ] = useState(null)
  const [ playerScore, setPlayerScore ] = useState(12)

  return (
    <PlayerScoreContext.Provider value={
      { playerScore, setPlayerScore }
    }>
      <PlayerMoveContext.Provider value={
        { PlayerMove, setPlayerMove }
      }>
        <Header />
        <ButtonGroup />

      </PlayerMoveContext.Provider>
    </PlayerScoreContext.Provider>
  )
}

export default App
