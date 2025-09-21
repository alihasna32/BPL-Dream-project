import { Suspense } from "react";
import "./App.css";

import AvailablePlayer from "./components/availablePlayers/availablePlayer";
import Navbar from "./components/navbar/navbar";
import SelectedPlayer from "./components/selectedPlayer/selectedPlayer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      <Suspense>
        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
      </Suspense>

      {/* <SelectedPlayer></SelectedPlayer> */}
    </>
  );
}

export default App;
