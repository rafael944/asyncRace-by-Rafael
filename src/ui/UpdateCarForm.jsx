import React, { useState } from "react";
import axiosConfig from "../services/axiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const UpdateCarForm = ({ selectedId, setCars }) => {
  const [updateCar, setUpdateCar] = useState("");
  const [updateColor, setUpdateColor] = useState("#rrggbb");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async function (updatedCarData) {
      await axiosConfig.put(`/garage/${selectedId}`, {
        name: updatedCarData.name,
        color: updatedCarData.color,
      });
      // Fetch updated cars and update the state
      const updatedCars = await axiosConfig.get("/garage");
      setCars(updatedCars.data);
      queryClient.invalidateQueries("cars");
    },
  });

  function updateCurrentCar() {
    if (!selectedId || !updateCar) return;
    mutate({ name: updateCar, color: updateColor });
    setUpdateCar("");
  }

  return (
    <div>
      <input
        value={updateCar}
        onChange={(e) => setUpdateCar(e.target.value)}
        type="text"
        placeholder="Edit your car"
      />

      <input
        value={updateColor}
        onChange={(e) => setUpdateColor(e.target.value)}
        type="color"
        className="color"
      />
      <button className="update" onClick={updateCurrentCar}>
        Update
      </button>
    </div>
  );
};

export default UpdateCarForm;
