import React from 'react'
import SelectedCard from '../selectedCard/selectedCard'

// SelectedPlayer component → নির্বাচিত players এর তালিকা দেখাবে
const SelectedPlayer = ({ purchasedPlayer, removePlayer, addMorePlayer }) => {
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
      <div className="mt-6 text-left">
        <button onClick={addMorePlayer} className="bg-[#E7FE29] border border-gray-300 px-4 py-2 rounded-lg font-bold">
          Add More Player
        </button>
      </div>
    </div>
  )
}

export default SelectedPlayer
 