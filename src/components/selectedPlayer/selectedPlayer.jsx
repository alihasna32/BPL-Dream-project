import React from 'react'
import SelectedCard from '../selectedCard/selectedCard'

const SelectedPlayer = ({purchasedPlayer, removePlayer}) => {
  return (
    <div className='mx-auto mt-5'>
        {
          purchasedPlayer.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
        }
    </div>
  )
}

export default SelectedPlayer