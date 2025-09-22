import React, { use } from "react";
import PlayerCard from "../playerCard/playerCard";

// AvailablePlayer component → সব players দেখাবে
const AvailablePlayer = ({ playerPromise, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayer }) => {
  // React 18 এর use() hook ব্যবহার করে promise resolve করা হচ্ছে
  const playerData = use(playerPromise);

  return (
    <div className="grid grid-cols-3 max-md:grid max-md:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5 mt-9">
      {
        // প্রত্যেকটা player কে PlayerCard component এ পাঠানো হচ্ছে
        playerData.map(player => (
          <PlayerCard 
            key={player.player_name} 
            purchasedPlayer={purchasedPlayer} 
            setPurchasedPlayers={setPurchasedPlayers} 
            setAvailableBalance={setAvailableBalance} 
            availableBalance={availableBalance} 
            player={player}>
          </PlayerCard>
        ))
      }
    </div>
  );
};

export default AvailablePlayer;
