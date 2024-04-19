import React, { useState } from "react";
import axiosConfig from "../services/axiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateCarForm = ({ setCars }) => {
  const [createCar, setCreateCar] = useState("");
  const [createColor, setCreateColor] = useState("#rrggbb");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async function (newCarData) {
      const response = await axiosConfig.post("garage", {
        name: newCarData.name,
        color: newCarData.color,
        id: newCarData.id,
      });
      return response.data;
    },
    onSuccess: (response) => {
      console.log(response);
      // Update the cars list by adding the newly created car
      setCars((prevCars) => [...prevCars, response]);
      queryClient.invalidateQueries("cars");
    },
  });

  function createNewCar() {
    if (!createCar) return;
    mutate({ name: createCar, color: createColor, id: Math.random() });
    setCreateCar("");
  }

  return (
    <div>
      <input
        value={createCar}
        onChange={(e) => setCreateCar(e.target.value)}
        type="text"
        placeholder="Enter the car name"
      />
      <input
        value={createColor}
        onChange={(e) => setCreateColor(e.target.value)}
        type="color"
        className="color"
      />
      <button className="update" onClick={createNewCar}>
        Create
      </button>
    </div>
  );
};

export default CreateCarForm;
