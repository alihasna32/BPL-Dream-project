import { Suspense, useState } from "react";
import "./App.css";
 import { ToastContainer} from 'react-toastify';
import AvailablePlayer from "./components/availablePlayers/availablePlayer";
import Navbar from "./components/navbar/navbar";
import SelectedPlayer from "./components/selectedPlayer/selectedPlayer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playerPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState();
  const [availableBalance, setAvailableBalance] = useState(360034000);
  const [purchasedPlayer, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayer.filter(ply => ply.player_name!==p.player_name)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price))
  }
 
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-sm:w-[320px] max-sm:space-x-12 mx-auto mt-6 flex justify-between items-center">
        <h1 className="text-[28px] max-sm:text-xl font-bold">
          {
            toggle === true ? "Available Players" : `Selected Player (${purchasedPlayer.length}/6)`
          }
        </h1>

        <div className="max-sm:flex max-sm:w-[500px]">
          <button
            onClick={() => setToggle(true)}
            className={`max-sm:p-2 rounded-l-2xl pl-6.5 p-3 border-1 border-gray-200 border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } font-bold cursor-pointer`}
          >
            Available
          </button>

          <button
            onClick={() => setToggle(false)}
            className={`max-sm:p-2 rounded-r-2xl pr-6.5 p-3 border-1 border-gray-200 border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            } font-light cursor-pointer`}
          >
            Selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayer
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayer removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedPlayer>
      )}
        <ToastContainer></ToastContainer> 
    </>
  );
}

export default App;
