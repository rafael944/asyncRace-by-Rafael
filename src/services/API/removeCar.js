import axiosConfig from "../../services/axiosConfig";

async function removeCar(id, setIsRemoved) {
  try {
    await axiosConfig.delete(`/garage/${id}`);
    setIsRemoved(true); // Set the flag to indicate that the car is removed
  } catch (error) {
    console.error("Failed to delete car:", error);
  }
}

export default removeCar;
