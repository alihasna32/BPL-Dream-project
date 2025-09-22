import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/report.png";
import { toast } from "react-toastify";
const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayer }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData["price"])
    if(availableBalance < playerPrice){
        toast("not enough coins")
        return
    }
    if(purchasedPlayer.length === 6) {
        toast("6 players already selected")
        return
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayer, playerData])
  };

  return (
    <div className="card bg-base-100 max-w-full shadow-sm p-4">
      <figure>
        <img src={player["player_img"]} />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="Shoes" />
          <h2 className="card-title ml-2">{player["player_name"]}</h2>
        </div>

        <div className="flex justify-between mt-4 border-b-2 border-gray-200 pb-4">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-2">{player["player_country"]}</span>
          </div>

          <button className="btn">{player["playing_role"]}</button>
        </div>

        <div className="font-bold flex justify-between">
          <span>Rating</span>
          <span>{player["rating"]}</span>
        </div>

        <div className="mt-3 flex justify-between">
          <span className="font-bold">Left hand bat</span>
          <span>{player["bating_style"]}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: {player["price"]} $</p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
