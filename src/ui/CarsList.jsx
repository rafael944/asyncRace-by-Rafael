import { useQuery } from "@tanstack/react-query";
import Cars from "./Cars";
import { getCars } from "../services/API";

export default function CarsList({
  race,
  cars,
  individualCarsStopActions,
  car,
  selectedId,
  setSelectedId,
}) {
  return (
    <div className="road">
      <ul className="carslist">
        {car.map((val, index) => (
          <Cars
            key={index}
            id={val.id}
            color={val.color}
            race={race}
            name={val.name}
            car={cars}
            individualCarsStopActions={individualCarsStopActions}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        ))}
      </ul>
    </div>
  );
}
