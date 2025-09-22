import React from "react";

// নির্বাচিত player এর ছোট কার্ড
const SelectedCard = ({ player, removePlayer }) => {
  // Remove button click করলে এই function চালু হবে
  const handleRemove = () => {
    removePlayer(player); // parent থেকে আসা remove function কল করবে
  };

  return (
    <div className="border-2 border-gray-200 rounded-2xl flex justify-between items-center p-3 mt-3.5">
      {/* Player Image + Info */}
      <div className="flex items-center ">
        <img
          src={player.player_img}
          className="h-[50px] w-[50px] rounded-xl"
          alt={player.player_name}
        />
        <div className="ml-2.5">
          <h1>{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>

      {/* Remove Button */}
      <div onClick={handleRemove}>
        <img 
          className="cursor-pointer" 
          src="https://i.ibb.co.com/7Jt6xGhc/Vector.png" 
          alt="Remove Player" 
        />
      </div>
    </div>
  );
};

export default SelectedCard;
