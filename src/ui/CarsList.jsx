import { useQuery } from "@tanstack/react-query";
import Cars from "./Cars";
import { getCars } from "../services/API";
import { useState } from "react";

export default function CarsList({
  race,
  cars,
  individualCarsStopActions,
  car,
  selectedId,
  setSelectedId,
  setCars,
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
            setCars={setCars}
            individualCarsStopActions={individualCarsStopActions}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        ))}
      </ul>
    </div>
  );
}
