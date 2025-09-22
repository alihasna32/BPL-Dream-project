// React থেকে Suspense (data fetching handle করার জন্য) এবং useState (state manage করার জন্য) import
import { Suspense, useState } from "react";
import "./App.css";

// Toast notification দেখানোর জন্য react-toastify থেকে import
import { ToastContainer } from 'react-toastify';

// Custom components import
import AvailablePlayer from "./components/availablePlayers/availablePlayer";
import Navbar from "./components/navbar/navbar";
import SelectedPlayer from "./components/selectedPlayer/selectedPlayer";

// players.json থেকে ডাটা fetch করার function
const fetchPlayers = async () => {
  const res = await fetch("/players.json"); // public ফোল্ডারের players.json থেকে data আনছে
  return res.json(); // data কে JSON format এ convert করছে
};

// fetchPlayers() কল করে একটা promise হিসেবে data রাখলাম
const playerPromise = fetchPlayers();

function App() {
  // toggle state → Available/Selected Players এর মধ্যে switch করার জন্য
  const [toggle, setToggle] = useState(true);



  // শুরুতে available balance → 360034000 coins
  const [availableBalance, setAvailableBalance] = useState(360034000);

  // যেসব player select করা হয়েছে সেগুলো এখানে array আকারে রাখা হবে
  const [purchasedPlayer, setPurchasedPlayers] = useState([]);

  // নির্বাচিত Player remove করার function
  const removePlayer = (p) => {
    // filter দিয়ে সেই player বাদ দিলাম যাকে remove করা হয়েছে
    const filteredData = purchasedPlayer.filter(ply => ply.player_name !== p.player_name);
    setPurchasedPlayers(filteredData);

    // remove করলে তার দাম ফেরত balance এ যোগ হবে
    setAvailableBalance(availableBalance + parseInt(p.price));
  };

  const addMorePlayer = () => { 
    setToggle(true)
  }

  return (
    <>
      {/* Navbar এ available balance দেখাবে */}
      <Navbar availableBalance={availableBalance}></Navbar>

      {/* Section title এবং Toggle buttons */}
      <div className="max-sm:w-[320px] max-sm:space-x-12 mx-auto mt-6 flex justify-between items-center">
        {/* Title: Available Players বা Selected Players */}
        <h1 className="text-[28px] max-sm:text-xl font-bold">
          {
            toggle === true 
              ? "Available Players" 
              : `Selected Player (${purchasedPlayer.length}/6)`
          }
        </h1>

        {/* Toggle Buttons */}
        <div className="max-sm:flex max-sm:w-[500px]">
          {/* Available Button */}
          <button
            onClick={() => setToggle(true)}
            className={`max-sm:p-2 rounded-l-2xl pl-6.5 p-3 border-1 border-gray-200 border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } font-bold cursor-pointer`}
          >
            Available
          </button>

          {/* Selected Button */}
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

      {/* Toggle অনুযায়ী কোন Component render হবে */}
      {toggle === true ? (
        // Suspense → Data আসার আগে loading দেখাবে
        <Suspense
          fallback={<span className="loading loading-spinner loading-xl"></span>}
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
        <SelectedPlayer 
          removePlayer={removePlayer} 
          purchasedPlayer={purchasedPlayer}
          addMorePlayer={addMorePlayer}>
        </SelectedPlayer>
      )}

      {/* Toast notification container */}
      <ToastContainer></ToastContainer> 
    </>
  );
}

export default App;

/*
🟢 Flow (Beginner-friendly)

1) Navbar → balance দেখায়।

2) Toggle Button → Available / Selected players switch করে।

3) AvailablePlayer → সব players card আকারে দেখায়।

4) PlayerCard → Select করলে:
  ** balance থেকে দাম কমবে
  ** purchased list এ player যাবে
  ** toast দেখাবে

5) SelectedPlayer → শুধুমাত্র যাদের select করা হয়েছে তাদের দেখায়।

6) SelectedCard → Remove করলে player বাদ যাবে এবং balance ফেরত আসবে।

*/