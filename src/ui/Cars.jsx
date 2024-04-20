import { useEffect, useState } from "react";
import { LuCar } from "react-icons/lu";
import removeCar from "../services/API/removeCar";

export default function Cars({
  color,
  index,
  id,
  race,
  name,
  individualCarsStopActions,
  setSelectedId,
  selectedId,
  cars,
  setCars,
}) {
  const [start, setStart] = useState(false);
  const [speeds, setSpeeds] = useState([]);
  const [isRemoved, setIsRemoved] = useState(false);

  function handleId(id) {
    setSelectedId(id);
  }

  useEffect(() => {
    setStart(race);
  }, [race]);

  useEffect(() => {
    setStart(race);
    if (race) {
      setSpeeds((prevSpeeds) => {
        const newSpeeds = [...prevSpeeds];
        newSpeeds[index] = Math.random() * 5;

        return newSpeeds;
      });
    }
  }, [race, setSpeeds]);

  function toggleStart() {
    setStart(true);
    const newSpeeds = [...speeds];
    newSpeeds[index] = Math.random() * 5;
    setSpeeds(newSpeeds);
  }

  function toggleStop() {
    setStart(false);
  }

  useEffect(() => {
    individualCarsStopActions.current.push(() => toggleStop());
  }, [individualCarsStopActions]);

  async function handleRemoveCar(id) {
    await removeCar(id, setIsRemoved);
  }

  if (isRemoved) {
    return null;
  }

  return (
    <li key={index} id={id}>
      <div className="all">
        <div className="race">
          <button
            onClick={() => handleId(id)}
            className={selectedId === id ? "active" : "select"}
          >
            Select
          </button>
          <button className="remove" onClick={() => handleRemoveCar(id)}>
            Remove
          </button>
        </div>
        <div className="race">
          <button onClick={toggleStart}>Start</button>
          <button onClick={toggleStop}>Stop</button>
        </div>
        <div
          className="car"
          style={start ? { right: "0", transition: `${speeds[index]}s` } : null}
        >
          <LuCar style={{ color: color }} />
        </div>
      </div>
      <p>{name}</p>
      <div className="finish">
        <span>FINISH</span>
      </div>
    </li>
  );
}
