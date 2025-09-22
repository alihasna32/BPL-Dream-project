import React from "react";

const SelectedCard = ({ player, removePlayer }) => {

  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-2 border-gray-200 rounded-2xl flex justify-between items-center p-3 mt-3.5">
      <div className="flex items-center ">
        <img
          src={player.player_img}
          className="h-[50px] w-[50px] rounded-xl"
          alt=""
        />
        <div className="ml-2.5">
          <h1>{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img className="cursor-pointer" src="https://i.ibb.co.com/7Jt6xGhc/Vector.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
