import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/report.png";
import { toast } from "react-toastify";

// প্রত্যেকটা player এর card
const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayer }) => {
  // কোন player নির্বাচিত হয়েছে কিনা সেটা track করবে
  const [isSelected, setIsSelected] = useState(false);

  // Player select করার function
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData["price"]);

    // যদি balance player দামের চেয়ে কম হয়
    if (availableBalance < playerPrice) {
      toast("Not enough coins"); // Toast notification
      return;
    }

    // সর্বোচ্চ 6 জন player select করা যাবে
    if (purchasedPlayer.length === 6) {
      toast("6 players already selected");
      return;
    }

    // সব condition ঠিক থাকলে player select করবো
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice); // দাম কমবে balance থেকে
    setPurchasedPlayers([...purchasedPlayer, playerData]); // player add হবে purchased list এ
  };

  return (
    <div className="card bg-base-100 max-w-full shadow-sm p-4">
      {/* Player Image */}
      <figure>
        <img src={player["player_img"]} alt={player["player_name"]} />
      </figure>

      <div className="mt-4">
        {/* Player Name */}
        <div className="flex">
          <img src={userImg} alt="User Icon" />
          <h2 className="card-title ml-2">{player["player_name"]}</h2>
        </div>

        {/* Country + Role */}
        <div className="flex justify-between mt-4 border-b-2 border-gray-200 pb-4">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="Country Flag" />
            <span className="ml-2">{player["player_country"]}</span>
          </div>
          <button className="btn">{player["playing_role"]}</button>
        </div>

        {/* Rating */}
        <div className="font-bold flex justify-between">
          <span>Rating</span>
          <span>{player["rating"]}</span>
        </div>

        {/* Batting Style */}
        <div className="mt-3 flex justify-between">
          <span className="font-bold">Batting Style</span>
          <span>{player["bating_style"]}</span>
        </div>

        {/* Price + Select Button */}
        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: {player["price"]} $</p>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
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
