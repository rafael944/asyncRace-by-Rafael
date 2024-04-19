import axiosConfig from "../axiosConfig";
import endpoints from "../endpoints";

export async function getCars(queryParams = {}) {
  try {
    const result = await axiosConfig.get(endpoints.GET_CARS, queryParams);

    return result.data;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch" + error);
  }
}
