import { useRef, useState } from "react";
import CarsList from "./../../ui/CarsList";
import Configurations from "./../../ui/Configurations";
import Header from "./../../ui/Header";

export default function Garage({ cars, setCars }) {
  const [race, setRace] = useState(false);
  const individualCarsStopActions = useRef([]);
  const [selectedId, setSelectedId] = useState("");

  function handleRace() {
    setRace(true);
  }

  function handleStop() {
    setRace(false);
    individualCarsStopActions.current.forEach((action) => {
      action();
    });
  }

  return (
    <div className="main">
      <Header />

      <Configurations
        handleRace={handleRace}
        handleStop={handleStop}
        setCars={setCars}
        selectedId={selectedId}
      />

      <CarsList
        individualCarsStopActions={individualCarsStopActions}
        race={race}
        car={cars}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
      />
    </div>
  );
}
