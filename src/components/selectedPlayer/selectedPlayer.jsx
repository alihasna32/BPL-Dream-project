import React from 'react'
import SelectedCard from '../selectedCard/selectedCard'

// SelectedPlayer component → নির্বাচিত players এর তালিকা দেখাবে
const SelectedPlayer = ({ purchasedPlayer, removePlayer }) => {
  return (
    <div className='mx-auto mt-5'>
      {
        purchasedPlayer.map(player => (
          <SelectedCard 
            key={player.player_name}
            removePlayer={removePlayer} 
            player={player}>
          </SelectedCard>
        ))
      }
    </div>
  )
}

export default SelectedPlayer
