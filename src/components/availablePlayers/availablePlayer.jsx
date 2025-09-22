import React, { use } from "react";
import PlayerCard from "../playerCard/playerCard";


const AvailablePlayer = ({ playerPromise, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayer }) => {
  const playerData = use(playerPromise);
  return (
    <div className="grid grid-cols-3 max-md:grid max-md:grid-cols-1 md:grid md:grid-cols-2 lg:gird lg:grid-cols-3 gap-5 mt-9">
      {
        playerData.map(player => <PlayerCard purchasedPlayer={purchasedPlayer} setPurchasedPlayers={setPurchasedPlayers} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} player={player}></PlayerCard>)
      }
    </div>
  );
};

export default AvailablePlayer;
